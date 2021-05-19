import axios from 'axios';
import {API_KEY} from '../constants/constants';

export const getMap = async (req) =>  {
    //let url = `https://dev.virtualearth.net/REST/v1/Imagery/Map/imagerySet/centerPoint/zoomLevel?mapSize=100,600&format=jpeg&key=${API_KEY}`;
    let url = `http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/47.645523,-122.139059/18?mapSize=1500,1500&mapLayer=Basemap,Buildings&format=jpeg&key=${API_KEY}`

    let data = await axios({
        url: url,
        method: 'get',
        responseType: 'blob'});
    return data;
};