import Axios from 'axios'
import React, { useEffect, useState } from 'react';
import './App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {
  const url = 'https://api.unsplash.com/photos/?client_id=WWrItj2cxSb3lWDNYfNL67ZCxVO8d5d-w5x6DFjg6Ns';
  
  const [images, setImages] = useState([]);

  const getImages = () =>{
    Axios.get(url).then((res) => {
      setImages(res.data);
    });
  };

  useEffect(() => {
    getImages();
  },[]);

  if(!images){
    return <h1>Loading...</h1>
  }
  return (
    <div className="App">
     {images.map((image) => {
       return(
       <LazyLoadImage
         effect="blur" 
         src={image.urls.regular} 
         alt={image.alt_description} 
         key={image.id}
         width="510px"
        height="400px"
        placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'}
        /> 
        );
     })}
    </div>
  );
}

export default App;
