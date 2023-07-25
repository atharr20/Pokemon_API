import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {
    const [pokelist, setPokelist] = useState([])
    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(response=> {
            setPokelist(response.data.results)
        }).catch(err => {
            console.log(err);
        })
    }
    const styleCenter= {
        textAlign: "center"
    }
    return (
        <div>
            <div>
                <button onClick={fetchPokemon} style={styleCenter}>Fetch Pokemon</button> 
            </div>
            <div>
                <ul>
                    {pokelist.map((pokemon)=>{
                        return (
                            <li style={styleCenter}>{pokemon.name}</li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Post