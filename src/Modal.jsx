import React, {useState} from "react";
import { Link } from "react-router-dom";
import postJSON from "./postFavorite";


const Modal = ({open, onClose, pet}) => {
const [selectedOption, setSelectedOption] = useState("");

const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
};

const handleAddToFavorites = () => {
    if (selectedOption === "Add to Favorites") {
        postJSON(pet);
        onClose();
    }
};


if(pet) {
    console.log(pet);

    if (!open) return null 
    return (
<div id="modal">
    <div>
    {/* {JSON.stringify(pet.breeds)}  */}
    <img width={400} height={400} src={pet.url} alt={""}></img>
     <h2>{pet.breeds[0].name}</h2>
    <h3> Temperament: {pet.breeds[0].temperament}</h3>
    <h3>{pet.breeds[0].description}</h3> 
    </div>
    <button onClick={(onClose)}>x</button>
    <select onChange={handleOptionChange}>
        <option value="">Select an Option</option>
        <option value="Add to Favorites">Add to Favorites</option>
    </select>
   <button onClick={handleAddToFavorites}>Submit</button>
    <Link to='/breeds'>Go to Breeds</Link>
    </div>
    )
}
}

export default Modal;