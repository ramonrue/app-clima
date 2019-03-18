const axios=require('axios');


const getLugarLatLng= async (dir)=>{
    //console.log(argv.direccion);
    //NECESITAMOS HACER ESTO PARA QUE EL NAVEGADOR ENTIENDA LOS ESPACIOS EN BLANCO!!
    const encodeUrl=encodeURI(dir);
    //console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key': 'a21bace495msh6153f5ce4aad6cfp12adc5jsn9139b2171d28'}
    });

    const resp= await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error (`No hay resultados para ${dir}`);
    }
    const data=resp.data.Results[0];
    const direccion=data.name;
    const lat=data.lat;
    const lng=data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports={
    getLugarLatLng
}

