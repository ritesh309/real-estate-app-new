import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async ( url ) => {
    const { data } = await axios.get( ( url ), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'a749675ff0mshbba8b96bc7d47ddp15ebc1jsnfb610f754d54'
        },
    } );

    return data;
}