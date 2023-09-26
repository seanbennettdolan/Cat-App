import { useQuery } from "@tanstack/react-query";
import fetchBreeds from "./fetchBreeds";
import fetchBreed from "./fetchBreed";
import { useState, useEffect } from "react";

const Breeds = () => {
    const { data: breeds } = useQuery(["breeds"], fetchBreeds)
    const [allBreeds, setAllBreeds] = useState([]); //Initialize an empty array for all breed objects
    const [breedIds, setBreedIds] = useState([]); //track breed id's


    useEffect(() => {
        if (breeds) {
           
            setAllBreeds(breeds);
            setBreedIds(allBreeds.map((breed) => breed.id))
    
            
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
console.log("breedIds", breedIds)


// const handleImages = () => {
//     allBreeds.map((breed) => {
//         const result = fetchBreed(breed.id);
//         console.log(result);
//     })
    
// }

// handleImages();





// const handleImages = async (id) => {
//     const result = await fetchBreed(id);
//     setBreedImages(result);
//     };

//     console.log(breedImages);

    

return (
    <div className="breeds">
        
 {breedIds.map((breed, index) => (


    //    <img width={400} height={400} key={index} src={fetchBreed(breed).url} alt={`breed ${index}`}
    //     />
    <div key={index}>{breed.id}</div>
   //pass breed ids into fetchBreed
    
))} 
</div>
)
}

export default Breeds;