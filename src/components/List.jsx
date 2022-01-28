import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const List = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
            .then(response => {
            console.log(response);
            setList(response.data.results);
        })
        .catch(e => console.log(e));
    }, []);

  return (
    <div className='container mt-6'>
        <p className='title'>Welcome to Rick & Morty's Page!</p>
        {list.map(character => {
            return (
            <div className="box" key={character.id}>
                <div className="media">
                    <div className="media-left">
                        <figure className='image is-128x128'>
                            <img src={character.image} alt={character.name} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p className="title is-4">{character.name}</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        })}
    </div>

  );
};

export default List;
