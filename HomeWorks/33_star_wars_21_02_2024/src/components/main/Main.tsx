import React from "react";
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";

export interface MainProps {
  page: string;
  setPage: (page: string) => void;
}
const Main: React.FC<MainProps> = ({ page, setPage }) => {
  return (
    <div>
      <main className="clearFix">
        <Hero />
        <DreamTeam />
        <FarGalaxy />
      </main>
    </div>
  );
};

export default Main;
