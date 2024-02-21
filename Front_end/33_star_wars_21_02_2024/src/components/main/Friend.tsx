import React from "react";

const Friend: React.FC<{ friendSrc: string; number: number }> = ({
  friendSrc,
  number,
}) => {
  let nameOfClass = "col-4 p-1 ";
  if (number === 7) {
    nameOfClass += "bottomLeft";
  }
  if (number === 9) {
    nameOfClass += "bottomRight";
  }
  return (
    <img className={nameOfClass} src={friendSrc} alt={`friend${number + 1}`} />


    // return (
      //   <img
      //     className={ col-4 p-1
      //       number === 7 ? "bottomLeft" : number === 9 ? "bottomRight" : ""
      //     }
      //     src={friendSrc}
      //     alt={`friend${number + 1}`}
      //   />
      // );
  );
};

export default Friend;
