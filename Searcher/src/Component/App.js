import { useState } from "react";
import Photo from './../photos/images.png'
import Unsplash from './../photos/1_3DB6qJGyUFL5LbSBGEgEtg.png'
import './style.css'
function App() {

  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  console.log(result)
  const fetchImage = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=gNYoN-Lb_a6htizxkrg0A00SDG6TJIWmfTFqmP5suyA&query=${value}`)
    .then(res => res.json())
    .then(data => {
      setResult(data.results)
    })
  }

  return (
    <div>
        <div className="header">
          <span>
            <img src={Photo} />
          </span>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={fetchImage}>Send</button>
        </div>
        <div className="gallery">
          {
            result? 
              result.map((item) => 
              <img key={item.id} src={item.urls.regular} alt="" />
              )
            :
            <div className="SoloSplash">
              <h2>UnSplash photo Searcher</h2>
              <p>The internet’s source for visuals.
              Powered by creators everywhere.</p>
              <img  src={Unsplash} />
            </div>

          }
        </div>
    </div>
  );
}

export default App;
