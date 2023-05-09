import React, {useEffect, useState} from 'react';
import cl from './filmpage.module.css'
import {useParams} from "react-router";

const Filmpage = () => {
    const title = useParams().title
    const cat = useParams().cat
    const [desc, setDesc] = useState('Description Description Description')
    const data = require(`/src/films/${title}.json`)
    console.log(data);
    return (
        <div className={cl.main}>
            <div className={cl.info}>
                <img src={data.cover} className={cl.cover} alt=""/>
                <div>
                    <h2>{data.title + (data.part ? ': '+data.part : '')}</h2>
                    <p>{
                        data.genres.map(genre => genre+'/')
                    }</p>
                    <p>{data.description}</p>
                </div>
            </div>
            <div className={cl.player}>

            </div>
        </div>
    );
};

export default Filmpage;