import axios from 'axios'
const KEY = 'AIzaSyC0YdDSuOdZKegj3r30NIPG8UaeqdiLX2M'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        key:KEY,
        maxResults:5
    }  
});