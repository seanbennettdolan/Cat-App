import getJSON from "./getFavorite";
import { useQuery } from "@tanstack/react-query";
import fetchCat from "./fetchCat";


const Favorites = () => {
const {data: favorites} = useQuery(["favorites"], getJSON)

// useEffect(() => {
//     if (data) {
//         // Concatenate the new images with the existing ones
//         setAllImages(prevImages => prevImages.concat(pets));
//     }
// }, [data]);



if (favorites === undefined)
return(
    <div className="loading-pane">
        <h2 className="loader"> 🐱
        </h2>
    </div>
)

console.log(favorites);

return (
    <div className="favorites">

{JSON.stringify(favorites)}
    </div>
)

}

export default Favorites;