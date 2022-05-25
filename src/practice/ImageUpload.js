import { useState } from "react";
import axios from 'axios';
const ImageUpload = () => {
    const [currentFile, setCurrentFile] = useState(null)
    
    const handleChange = (e) => {
        setCurrentFile(e.target.files[0])
      
    }

    const uploadFile = () => {
        const formData = new FormData();
        if (currentFile) {
            formData.append('file', currentFile)
            // formData.append('upload_preset', 'insta-clone')
        }
        axios.post('http://localhost:8000/upload/image-upload', formData)
        
        
       .then(data => {
            console.log(data.data)
        })
    }




    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"

            
        }}>
            <div style={{
                display:"flex"
            }}>
                {currentFile ?
                    <img style={{
                        width: "300px",
                        height: "300px",

                    }}
                        src={currentFile && URL.createObjectURL(currentFile)} alt="" />
                :""}
               <hr/>
                <div>
                    <table style={{
                        marginLeft: "20px"
                    }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td>FileName:</td>
                                <th>{currentFile?currentFile.name:""}</th>
                                
                            </tr>  
                            <tr>
                                <td>last Modified:</td>
                                <th>{currentFile ? currentFile.lastModifiedDate.toDateString() : ""}</th>

                            </tr>    
                            <tr>
                                <td>Size:</td>
                                <th>{currentFile ? ~~(currentFile.size/1024) +"KB" : ""}</th>

                            </tr>
                            <tr>
                                <td>

                                </td>
                            </tr>
                            
                        </tbody>
                </table>
            </div>
            </div>
            <br />
            <hr/>
            <input type="file" onChange={handleChange} />
            <button onClick={() => {
                uploadFile()

            }}>Upload</button>

        
    
        </div>
    );
};

export default ImageUpload;
