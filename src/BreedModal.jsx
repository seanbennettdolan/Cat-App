import React from "react";
import { Link } from "react-router-dom";


const BreedModal = ({open, onClose, breed}) => {
if(breed) {
    console.log(breed);

    if (!open) return null 
    return (
<div id="modal">
    <div>
    {/* {JSON.stringify(breed)}; */}
    <img width={400} height={400} src={breed[0].url} alt={""}></img>
    <h2>{breed["breeds"].name}</h2>
    <h3>{breed.temperment}</h3>
    <h3>{breed.description}</h3>
    </div>
    <button onClick={(onClose)}>x</button>
    {/* <Link to='/breeds'>Back to Breeds</Link> */}
    </div>
    )
}
}

export default BreedModal;