import getJSON from "./getFavorite";
import { useQuery } from "@tanstack/react-query";
import deleteJSON from "./deleteFavorite";
import { useEffect, useState } from "react";


const Favorites = () => {
const {data: favorites, refetch } = useQuery(["favorites"], getJSON)
const [loadedFavorites, setLoadedFavorites] = useState([]);

useEffect(() => {
    if (favorites) {
      setLoadedFavorites(favorites);
    }
}, [favorites]);




if (favorites === undefined)
return(
    <div className="loading-pane">
        <h2 className="loader"> 🐱
        </h2>
    </div>
)

console.log(favorites);

const deleteFunction = async (id) => {
   try { 
    await deleteJSON(id);

await refetch();
   } catch (error) {
    console.error("Error deleting favorite:", error);
   }
};

return (
    <div className="favorites">

{/* {JSON.stringify(favorites)} */}


  {loadedFavorites.map((favorite, index)=> (
<div key={index}>

{console.log(favorite)}
 <img width={400} height={400} src={favorite.image.url} alt={""}></img> 
 <button onClick={()=>deleteFunction(favorite.id)}>Delete from Favorites</button>

</div>
    ) 
     )}   

    </div>
)

}

export default Favorites;