import { useQuery } from "@tanstack/react-query";
import fetchCats from "./fetchCats";
import { useState, useEffect } from "react";


const Results = () => {
    const { data: pets, refetch } = useQuery(["details"], fetchCats)
    const [loadedImages, setLoadedImages] = useState(10); // Initialize state to 10 images
    const [allImages, setAllImages] = useState([]); //Initialize an empty array for all images

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


  return (
  <div className="cats">
    <div>

 {allImages.slice(0, loadedImages).map((pet, index) => (
                    <img width={400} height={400} key={index} src={pet.url} alt={`cat ${index}`} />
                ))}
<button onClick={loadMoreImages}>Show More Cats!</button>
        
    
    </div>
  </div>
  )
}

export default Results;