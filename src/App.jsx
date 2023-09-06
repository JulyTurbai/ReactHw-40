import './App.css';
import { useState, useEffect } from 'react';
import GetRandomDog from './components/GetRandomDog';
import SelectDog from './components/SelectDog';
import GalleryPhoto from './components/GalleryPhoto';

const url = {
  random: 'https://dog.ceo/api/breeds/image/random'
}

function App() {
  const [img, setImg] = useState('');
  const [isSelect, setIsSelect] = useState(false);
  const [breeds, setBreeds] = useState([]);
  const [status, setStatus] = useState(true);
  const [valGallery, setValGallery] = useState(1);
  const [gallery, setGallery] = useState([]);

 
  useEffect(() => {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then((response) => response.json())
  .then(response => {
    let keys = Object.keys(response.message)
    keys.forEach(element => {
      breeds.push(element)
        });
      })
 }, [breeds]);


const clickHandler = async () => {
    const src = await getSingleDog(url.random);
    setImg(src)
  } 

const getGallery = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random/${valGallery}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setGallery(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
  }
}

  return (
    <div className="container">
        
        <h1>Random Dogs</h1>

        <div className="get-dogs">

            <GetRandomDog 
            img={ img }
            clickHandler={ clickHandler }
            />

            <SelectDog
            breeds={ breeds }
            isSelect={ isSelect }
            setIsSelect={ setIsSelect }
            />
        
        </div>

            <GalleryPhoto
            status={ status }
            valGallery={ valGallery }
            setValGallery={ setValGallery }
            getGallery={ getGallery }
            gallery={ gallery }/>
        
    </div>
  );
}

async function getSingleDog(url) {
  const res = await fetch(url);
  const data = await res.json();

  
  return data.message;
}



export default App;
