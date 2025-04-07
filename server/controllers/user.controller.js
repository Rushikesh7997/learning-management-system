import {User} from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";


// Signup and register new account 

export const register = async (req, res) =>{
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required."
            });
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                success:false,
                message:"User already exist with this email."
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            name,
            email,
            password:hashedPassword,
        });
        return res.status(201).json({
            success:true,
            message:"Account Created Successfully."
        })
    } catch (error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Failed to Register"
        })
    }
}

// Login into registered account 

export const login = async (req, res) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required."
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Incorrect Email or Password"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                success:false,
                message:"Incorrect Email or Password"
            })
        }
        // Jwt token - 
        generateToken(res, user, `Welcome back ${user.name}`);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Failed to Login"
        })
    }
}

// Logout 

export const logout = async (_,res) =>{
    try {
        return res.status(200).cookie("token","", {maxAge:0}).json({
            message : "Logged Out Successfully.",
            success : true,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Failed to Logout"
        })
    }
}

// User profile

export const getUserProfile = async (req,res) =>{
    try {
        const userId = req.id;
        const user = await User.findById(userId).select('-password');
        if(!user){
            return res.status(404).json({
                message:"Profile not found",
                success:false,
            })
        }
        return res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Failed to Load User"
        })
    }
}

export const updateProfile = async (req,res) =>{
    try {
        const userId = req.id;
        const {name} = req.body;
        const profilePhoto = req.file;

        const user = await User.findById(userId);
        
        if(!user){
            return res.status(404).json({
                message:"User not found",
                success:false,
            })
        }

        // extract public id of the old image from the url is it exists.
        if(user.photoUrl){
            // extract public id
            const publicId = user.photoUrl.split("/").pop().split(".")[0]; 
            deleteMediaFromCloudinary(publicId)
        }

        // upload new photo to cloudinary 
        const cloudResponse = await uploadMedia(profilePhoto.path);
        const photoUrl = cloudResponse.secure_url;

        const updatedData = {name, photoUrl};
        const updateUser = await User.findByIdAndUpdate(userId, updatedData, {new:true}).select("-password");

        return res.status(200).json({
            success:true,
            user:updateUser,
            message:"Profile updated successfully."
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Failed to Update profile"
        })
    }
}