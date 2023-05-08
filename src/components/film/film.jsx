import React from 'react';
import cl from './film.module.css'

const Film = ({title, cover, cat, genres}) => {
    const filmHref = cat ? '/film/'+cat+'/'+title : '/film/Мировое кино/'+title
    return (
        <a href={filmHref}><div className={cl.film}>
            <img src={cover} className={cl.cover} alt=""/>
            <h3>{title}</h3>
            <p>
                {
                    genres.map(genre => {
                        return genre + '/'
                    })
                }
            </p>
        </div></a>
    );
};

export default Film;