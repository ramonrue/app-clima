
const axios=require('axios');

const getClima=async (lat,lng)=>{
    const resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=827add43628a2b3dbcf9315d188a648c&units=metric`)    
    return resp.data.main.temp;
}

module.exports={
        getClima
}