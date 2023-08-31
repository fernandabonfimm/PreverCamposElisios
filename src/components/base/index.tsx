import React from "react";
import Header from "../header";

interface BaseProps {
    children: JSX.Element | JSX.Element [];
}

const Base: React.FC<BaseProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">{children}</div>
    </>
  );
};

export default Base;
