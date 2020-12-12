import { Results } from './components/Results';

export const api = async (value) => {
    //ponemos en una variable la url que queremos pegar
    const githubUrl = `https://jobs.github.com/positions.json?search=${value}`;
    const url = `https://api.allorigins.win/get?url=${ encodeURIComponent(githubUrl) }`;
    //pegando a API
    const response = await window.fetch(url);
    const resultado = await response.json();
    const data = infoAPI(JSON.parse(resultado.contents));//el resultado lo pasamos como parámetro dentro de una funcion
    
    try {
        return data;
    } catch (error) {
        console.log(error)
    }
}

export function infoAPI(vacantes){

    if(vacantes.length > 0) {
        
        vacantes.forEach(vacante => {
            //para cada vacante buscamos los siguientes datos            
            return (
                Results(vacante)
            )
        })
    }
}