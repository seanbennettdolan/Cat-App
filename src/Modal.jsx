import React from "react";


const Modal = ({open, onClose, pet}) => {
if(pet) {
    console.log(pet);

    if (!open) return null 
    return (
<div id="modal">
    <div>
    {JSON.stringify(pet)};
    <img src={pet.url} alt={""}></img>
    </div>
    <button onClick={(onClose)}>x</button>
    <select>
        <option>Add to Favorites</option>
    </select>
    </div>
    )
}
}

export default Modal;