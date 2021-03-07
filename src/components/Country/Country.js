import React from 'react';
import './Country.css'

const Country = ({country}) => {
    const {name, population, flag, region} = country;
    return (
        <div className="country-div">
            <div className='country'>
                <h2>Country Name: {name}</h2>
                <img src={flag} alt=""/>
                <h2>Population: {population}</h2>
                <h2>Region: {region}</h2>
            </div>
        </div>
    );
};

export default Country;