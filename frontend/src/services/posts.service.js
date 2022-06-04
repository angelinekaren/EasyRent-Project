import axios from "axios";

async function faceMatch(image1, image2) {
  const data = JSON.stringify({
    images: [image1, image2],
  });

  // console.log(data);

  return await axios.post("/face-match-liveness", data);
}

// function ocrKTP(image) {
//   const data = JSON.stringify({
//     images: [image],
//   });
//   console.log(data);
//   return axios.post("/ocr-ktp", data);
// }

export const postService = {
  faceMatch,
};
