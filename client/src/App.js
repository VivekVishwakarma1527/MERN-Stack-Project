import React from 'react';
import './App.css';
import { useRef, useState, useEffect } from 'react';
import { uploadFile } from './service/api.js';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  useEffect(()=>{
    const getImage = async() =>{
      if(file){
        const data = new FormData();
        data.append('name', file.name)
        data.append('file', file)

        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage()
  },[file])
  
  const fileInput = useRef(); 
  
  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
  
  const onUpload = () =>{
    fileInput.current.click()
  }

  return (
    <div className="container">
      <img src={logo} alt="banner"/>
      <div className="wrapper">
        <h1>Share File Here!</h1>
        <p>Upload and Share links (@)(@)</p>
        <input type="file" ref={fileInput} style={{display:'none'}} onChange={(e)=>setFile(e.target.files[0])} />
        <button onClick={()=> onUpload()} >Upload</button>
        <a href={result}>{result}</a>
      </div>
    </div>
  );
}

export default App;
