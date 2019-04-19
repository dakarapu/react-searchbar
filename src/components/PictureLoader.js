import axios from "axios";

function searchPics(term) {
  return new Promise(async (resolve, reject) => {
    let response = await axios.get("https://api.unsplash.com//search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization:
          "Client-ID 463174eea337c7c78f871b7d15f91f48cd4a99ab78268629bd49653bf3de9ec8"
      }
    });

    if (response.status === 200 && response.data) {
      console.log(response.data.results);
      resolve(response.data.results);
    } else {
      reject(response);
    }
  });
}

export default searchPics;
