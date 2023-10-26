import { useState } from "react"
import './App.css';

function App() {

  const [imageUrl, setImageUrl] = useState("")
  const [prompt, setPrompt] = useState("")

  const handleButtonClick = async () => {

    const data = {
      prompt: prompt,
      n:1,
      size:"1024x1024"
    }

    const url = 'https://api.openai.com/v1/images/generations';
    const options = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer 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',
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const imageUrl = data.data[0].url
      setImageUrl(imageUrl)
    } catch (error) {
      console.error(error);
    }
    
  }

  return (
    <div>
      <input className="inpbox" placeholder="Enter the prompt" onChange={
        (e)=>{
          setPrompt(e.target.value)
        }
      }></input>
      <br />
      <br />
      <button onClick={handleButtonClick} >generate image</button>
      <br />
      <br />
      <img src={imageUrl} alt="img"></img>
    </div>
  );
}

export default App;
