import { useQuery } from "@tanstack/react-query";
import fetchCats from "./fetchCats";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import fetchCat from "./fetchCat";
import { Link } from "react-router-dom";



const Results = () => {
    const { data: pets, refetch } = useQuery(["cats"], fetchCats)
    const [loadedImages, setLoadedImages] = useState(10); // Initialize state to 10 images
    const [allImages, setAllImages] = useState([]); //Initialize an empty array for all images
    const [openModal, setOpenModal] = useState(false); //tracks if modal is open or closed
    const [activePet, setActivePet] = useState(undefined); //tracks id of last clicked pet image

    useEffect(() => {
        if (pets) {
            // Concatenate the new images with the existing ones
            setAllImages(prevImages => prevImages.concat(pets));
        }
    }, [pets]);

    if (pets === undefined)
    return(
        <div className="loading-pane">
            <h2 className="loader"> 🐱
            </h2>
        </div>
    )



console.log(pets);

 // Function to load more images
 const loadMoreImages = () => {
    setLoadedImages(prevLoadedImages => prevLoadedImages + 10); // Increase the number of loaded images by 10
    
    refetch()
 }

const handleModal = async (id) => {
    setOpenModal(true);
   const result = await fetchCat(id);
   setActivePet(result);
};

const handleCloseModal = () => {
    setOpenModal(false)
};

  return (
  <div className="cats">
    <div>
      <div>
    <Link to="/favorites">Favorites</Link>
    </div>

 {allImages.slice(0, loadedImages).map((pet, index) => (
                    <img width={400} height={400} key={index} src={pet.url} alt={`cat ${index}`}
                    onClick={() => handleModal(pet.id)}  />
                ))}
     
<Modal open={openModal} onClose={handleCloseModal} pet={activePet}/>
          
<button onClick={loadMoreImages}>Show More Cats!</button>
        
    
    </div>
  </div>
  )
}

export default Results;