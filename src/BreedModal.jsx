import React from "react";
import { Link } from "react-router-dom";


const BreedModal = ({open, onClose, breed}) => {
if(breed) {
    console.log(breed);

    if (!open) return null 
    return (
<div id="modal">
    <div className="modal-content">
    {/* {JSON.stringify(breed)}; */}
    <img width={400} height={400} src={breed[0].url} alt={""}></img>
   <div className="modal-text">
    <button onClick={(onClose)}>x</button>
    </div>
    {/* <Link to='/breeds'>Back to Breeds</Link> */}
    </div>
    </div>
    )
}
}

export default BreedModal;