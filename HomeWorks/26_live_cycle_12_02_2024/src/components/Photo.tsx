import React, { FC, useContext, useEffect, useState } from "react";
import { IPhoto, PhotoContext } from "./PhotoList";

interface IProps {
  photo: IPhoto;
}

const Photo: FC<IProps> = ({ photo }) => {
  const objContext = useContext(PhotoContext);
  const [isBig, setIsBig] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    setIsBig(width > 1200);
  }, [width])

  return (
    <>
      {isBig ? (
        <img src={objContext?.url} alt={objContext?.title} />
      ) : (
        <img src={objContext?.thumbnailUrl} alt={objContext?.title} />
      )}
    </>
  );
};

export default Photo;
