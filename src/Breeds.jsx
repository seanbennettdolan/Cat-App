import { useQuery } from "@tanstack/react-query";
import fetchBreeds from "../API/fetchBreeds";
import fetchBreed from "../API/fetchBreed";
import { useState, useEffect } from "react";
import BreedModal from "./BreedModal";

const Breeds = () => {
    const { data: breeds } = useQuery(["breeds"], fetchBreeds)
    
    const [allBreeds, setAllBreeds] = useState([]); //Initialize an empty array for all breed objects
    const [breedIds, setBreedIds] = useState([]); //track breed id's
    const [openModal, setOpenModal] = useState(false); //tracks if modal is open or closed
    const [activeBreed, setActiveBreed] = useState(undefined); //tracks id of last clicked breed
    


    useEffect(() => {
        if (breeds) {
           
            setAllBreeds(breeds);
            setBreedIds(breeds.map((breed) => 
                breed.id));
        
    }
    }, [breeds]);


if (breeds === undefined)
return(
    <div className="loading-pane">
        <h2 className="loader"> 🐱
        </h2>
    </div>
)



console.log("allBreeds", allBreeds);
console.log("breedIds", breedIds);




const handleModal = async (id) => {
    setOpenModal(true);
   const result = await fetchBreed(id);
   setActiveBreed(result);
};

const handleCloseModal = () => {
    setOpenModal(false)
};

return (
    <div className="breeds">
        
 {allBreeds.map((breed, index) => (
      <div key={index}> 
     <div onClick={() => handleModal(breed.id)}> {breed.name} </div>
      </div>
))} 

<BreedModal open={openModal} onClose={handleCloseModal} breed={activeBreed}/>
</div>
)
}

export default Breeds;