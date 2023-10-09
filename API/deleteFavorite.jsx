const deleteJSON = async (favorite_id) => {


    try {
      const response = await fetch(`https://api.thecatapi.com/v1/favourites/${favorite_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "live_nAzGjBlyfZNJaRwQjUg7Lzc9OGCAdz2nVoWkPmeFqup5jNjUI6EpQrDui6VTOWos",


        },
      });


      if (!response.ok) {
        // Handle non-successful response (e.g., error status code)
        console.error("Error:", response.status, response.statusText);
        return null; // Handle the error condition as needed
      }
  
      const result = await response.json();
      console.log("Response:", result);
      return result;
    } catch (error) {
      console.error("Error:", error);
      return null; // Handle the error condition as needed
    }
  };
  
  export default deleteJSON;
