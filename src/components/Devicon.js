import React from "react";


export const Devicon = ({ name, description }) => {
  return <i className={name} title={description}></i>;
};
