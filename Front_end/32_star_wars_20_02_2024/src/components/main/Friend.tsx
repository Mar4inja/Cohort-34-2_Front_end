import React from "react";

const Friend: React.FC<{ friendSrc: string; number: number }> = ({
  friendSrc,
  number,
}) => {
  let nameOfClass = "";
  if (number === 7) {
    nameOfClass = "bottomLeft";
  }
  if (number === 9) {
    nameOfClass = "bottomRight";
  }
  return (
    <img className={nameOfClass} src={friendSrc} alt={`friend${number + 1}`} />
  );
};

export default Friend;
