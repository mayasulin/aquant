import react, {useEffect, useState} from 'react';
import './App.css';
import {getMap} from './services/apiService';
import {API_KEY} from './constants/constants';
import { ReactBingmaps } from 'react-bingmaps';

function App() {
 //const [map, setMap] = useState("");
 const [pins, setPins] = useState([]);

  useEffect(() => {
    /*let data = getMap().then((res)=> {
      //console.log(URL.createObjectURL(res.data))
      setMap(URL.createObjectURL(res.data));
    });*/
  }, []);

  const pushPin = (location) => {
    let pin = {
      center: [location.latitude, location.longitude],
      "radius":3,
      "points":6,
      "option": {fillColor: "green", strokeThickness:1}
    };

      let temp = [...pins];
      temp.push(pin);
      setPins(temp);
  };
  return (
    <div className="App">
     <ReactBingmaps 
        bingmapKey = {`[${API_KEY}]`}
        center = {[32.05202931629242, 34.76163708032963]} /*blumfield !!!*/
        getLocation={{addHandler: "click", callback: pushPin}}
        regularPolygons = {pins}
        pushPins = {
          [
            {
              "location":[32.05202931629242, 34.76163708032963], "option":{ color: 'red'}
            }]}
        >
      </ReactBingmaps>
    </div>
  );
}

export default App;
