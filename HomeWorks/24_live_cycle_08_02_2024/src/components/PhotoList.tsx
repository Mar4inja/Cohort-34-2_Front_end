import React, { useEffect, useState } from "react";
import Photo from "./Photo";



export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
const PhotoList = () => {
  const [photos, setPhotos] = useState<IPhoto[] | null>(null);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data))
  })

  return <div>
    {photos && photos.map((photo, index) => (
      <Photo key={index} photo={photo} />
    ))}
  </div>;
};

export default PhotoList
