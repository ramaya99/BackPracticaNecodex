import React from "react";
import { CreateTable } from "./components/CreateTable";

export const Fpage = () => {
  return (
    <>
      <div className="container">
        <div className="cont ttle">
          <span className="gre">{"<N"}</span>
          <span className="whi">{"ecodex  -->"}</span>

          <span className="righty">
            {" Catálogo de practicantes  "}
            <span className="gre2">{"/>"}</span>
          </span>
        </div>

        <div className="cont add-btn" title="Agregar Practicante">
          +
        </div>

        <div className="cont table">
          <CreateTable></CreateTable>
        </div>

        <div className="footer">
          {"© 2022, Saul Fimbres - Roberto Amaya. All Rights Reserved."}
        </div>
      </div>
    </>
  );
};
