// USED PACKAGES
import React from 'react'

// CSS IMPORTS
import classes from './InputField.module.css'

// export const FileField = ({id, IsRequired, label, name, fileName, rootProps, inputProps, isDragActive, your, acceptedExt}) => {

//     const handleInputFile = (id) => {
//         document.getElementById(id).click();
//     }

//     return (
//         <div className={classes.FileField}>
//             <div>
//                 <label htmlFor={id}>{label}{IsRequired ? <span style={{ color: 'red' }}> *</span> :  <span style={{ color: '#ccc' }}> (Optional)</span> }</label>
//             </div>
            
//             <div 
//             className={classes.InputFile}
//             onClick={()=>handleInputFile(id)}
//             {...rootProps}
//             >
//                 <input type='file' {...inputProps} id={id} name={name} />
//                 <div>
//                 {
//                     isDragActive ?
//                     <p>Drop your photo here ...</p> :
//                     <>
//                         <span className={classes.UploadFile}>Upload {your}</span><span> or drag and drop here</span>
//                     </>
//                 }
                    
//                 </div>
//                 <br />
//                 <div>
//                     <span className={classes.PickedFileName}>
//                         {fileName}
//                     </span>
//                 </div>
//             </div>
                    
//         </div>
//     )
// }
export const FileField = ({id, IsRequired, label, name, fileName, your, DraggedOver, handleChange}) => {

    const handleInputFile = (id) => {
        document.getElementById(id).click();
    }

    return (
        <div className={classes.FileField}>
            <div>
                <label htmlFor={id}>{label}{IsRequired ? <span style={{ color: 'red' }}> *</span> :  <span style={{ color: '#ccc' }}> (Optional)</span> }</label>
            </div>
            
            <div 
            className={classes.InputFile}
            onClick={()=>handleInputFile(id)}
            style={{ border: DraggedOver ? '2px solid black' : '2px dashed black' }}
            >
                <input type='file' id={id} name={name} onChange={handleChange} />
                <div>
                {
                    <>
                        <span className={classes.UploadFile}>Upload {your}</span><span> or drag and drop here</span>
                    </>
                }
                    
                </div>
                <br />
                <div>
                    <span className={classes.PickedFileName}>
                        {fileName}
                    </span>
                </div>
            </div>
                    
        </div>
    )
}


