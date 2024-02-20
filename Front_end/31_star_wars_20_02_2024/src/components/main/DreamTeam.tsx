import React from "react";
import { friends } from "../../utils/constants";
import Friend from "./Friend";

const DreamTeam = () => {
  return (
    <section
      style={{
        float: "right",
        width: "50%",
        border: "1px solid #eedb00",
        borderRadius: "0 0 15px 15px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    
      }}
      className="right"
    >
      <h2 style={{ width: "100%", textAlign: "center" }}>Dream Team</h2>
      {friends.map((friend, index) => (
        <Friend key={index} friendSrc={friend} number={index + 1} />
      ))}
    </section>
  );
};

export default DreamTeam;
