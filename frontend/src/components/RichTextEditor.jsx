// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';


// export const RichTextEditor = ({input, setInput}) => {

//     const handleChange = (content) =>{
//         setInput({...input, description:content});
//     }

//     return  <ReactQuill theme="snow" value={input.description} onChange={handleChange} />;;
   
// }


import React, { forwardRef, useImperativeHandle } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const RichTextEditor = forwardRef(({ input, setInput }, ref) => {
  const quillRef = React.useRef(null);

  const handleChange = (content) => {
    setInput({...input, description: content});
  };

  // Expose the Quill instance via ref if needed
  useImperativeHandle(ref, () => ({
    getEditor: () => quillRef.current?.getEditor(),
    // Add other methods you might need to expose
  }));

  return (
    <ReactQuill 
      ref={quillRef}
      theme="snow" 
      value={input.description} 
      onChange={handleChange} 
    />
  );
});

