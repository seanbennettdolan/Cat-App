const postJSON = async (data) => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/favourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "live_nAzGjBlyfZNJaRwQjUg7Lzc9OGCAdz2nVoWkPmeFqup5jNjUI6EpQrDui6VTOWos",


        },
        
        body: JSON.stringify({"image_id": data.id}),
      });
  
      const result = await response.json();
      
      console.log("Response:", result);
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
  
  export default postJSON;

// var rawBody = JSON.stringify({ 
//     "image_id": "id-of-image-to-favourite",
//     // "sub_id":"user-123"
//      });
    
    
//     const newFavourite = await fetch(
//     "https://api.thecatapi.com/v1/favourites", 
//         {
//             method: 'POST',
//             headers: { 'x-api-key': 'live_nAzGjBlyfZNJaRwQjUg7Lzc9OGCAdz2nVoWkPmeFqup5jNjUI6EpQrDui6VTOWos'} ,
//             body: rawBody
//         }
//     )
//          export default newFavourite;    