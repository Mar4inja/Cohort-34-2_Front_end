import React from "react";
import { friends } from "../../utils/constants";
import Friend from "./Friend";

const DreamTeam = () => {
  return (
    <section className="float-end w-50 mx-1 row border border-2 border-warning">
      <h2 className="text-center col-12">Dream Team</h2>
      {friends.map((friend, index) => (
        <Friend key={index} friendSrc={friend} number={index + 1} />
      ))}
    </section>
  );
};

export default DreamTeam;
