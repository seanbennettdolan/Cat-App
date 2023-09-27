import React from "react";
import { Link } from "react-router-dom";


const Modal = ({open, onClose, pet}) => {
if(pet) {
    console.log(pet);

    if (!open) return null 
    return (
<div id="modal">
    <div>
    {JSON.stringify(pet)};
    <img width={400} height={400} src={pet.url} alt={""}></img>
    </div>
    <button onClick={(onClose)}>x</button>
    <select>
        <option>Add to Favorites</option>
    </select>
    <Link to='/breeds'>Go to Breeds</Link>
    </div>
    )
}
}

export default Modal;