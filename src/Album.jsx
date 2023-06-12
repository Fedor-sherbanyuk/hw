// import React, { useState } from 'react';
// import axios from 'axios';
//
// const Album = ({ albumId }) => {
//     const [photos, setPhotos] = useState([]);
//
//     const loadPhotos = async () => {
//         try {
//             const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
//                 params: { albumId }
//             });
//             setPhotos(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     return (
//         <div>
//             <button onClick={loadPhotos}>Photos</button>
//             {photos.map(photo => (
//                 <img key={photo.id} src={photo.url} alt={photo.title} />
//             ))}
//         </div>
//     );
// };
//
// export default Album;
