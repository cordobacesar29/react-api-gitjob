import React from 'react';
export function Results({company, title, type, url}){
    
    setTimeout(() => {
        console.log(company, title, type, url)
    }, 5000);

    
    return (
        <div calssName="resultsVacants">
                <h1>{company}</h1>
                <p>{title}</p>
                <p>{type}</p>
                <p>{url}</p>
        </div> 
    )
}