import React, { useState } from "react";
const Card = ({ pokemon, loading,infoPokemon}) => {
    const [type, setType] = useState("all")

  
    return (
        <>   
        <div className="options" >
        <select name="" id="" onChange={e=>setType(e.target.value)}>
        <option value="all"> All</option>

        <option value="overgrow"> overgrow</option>
        <option value="chlorophyll"> chlorophyll </option>
        <option value="torrent"> torrent</option>
        <option value="swarm"> swarm</option>
        <option value="blaze"> blaze</option>
        <option value="solar-power"> solar-power</option>
        <option value="tangled-feet"> tangled-feet</option>
        <option value="big-pecks"> big-pecks</option>
        <option value="keen-eye"> keen-eye</option>
    </select>
        </div>
         
        {
            loading ? <h1>Loading...</h1> :
            
                pokemon.slice(0.10).filter(e=>type=="all"? e: e.abilities.filter(el=>el.ability.name==type).length).map((item) => {
                    return (
                        <>
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                        </>
                    )
                })
        }

        </>
    )
}
export default Card;