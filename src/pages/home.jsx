import React, {useEffect, useState} from 'react';
import Film from "../components/film/film";
import cl from './home.module.css'
import {useParams} from "react-router";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, where, query } from "firebase/firestore";
import axios from "axios";
import Loading from "../components/loading/loading";
import config from '../../package.json'
import initApp from "../js/initApp";

const Home = () => {
    const cat = useParams().cat
    const [films, setFilms] = useState([])
    const app = initApp()
    const getFilms = () => {
        let film
        const films = []
        config.films.map(title => {
            film = require(`../films/${title}.json`)
            films.push(film)
        })
        console.log(films);
        setFilms(films)
    }
    useEffect(() => {
        getFilms()
    }, [])
    // const db = getFirestore(app)
    // const getFilms = async () => {
    //     const docs = cat ? await getDocs(query(collection(db, 'films'), where('category', '==', cat))) : await getDocs(collection(db, 'films'))
    //     const films = []
    //     docs.forEach(film => {
    //         films.push(film.data())
    //     })
    //     setFilms(films)
    //
    // }
    // useEffect(() => {
    //     getFilms()
    // }, [])
    return (
        <div className={cl.films}>
            {
                films.length
                    ? films.map(film => {
                        return (<Film title={film.title} cover={film.cover} cat={cat} genres={film.genres}/>)
                    })
                    : <center><Loading /></center>


            }
        </div>
    );
};

export default Home;