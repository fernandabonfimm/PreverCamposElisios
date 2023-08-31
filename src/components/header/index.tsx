import React from "react";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import LogoPrever from "@/assets/img/logopreverazul.png";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center gap-5 p-5 w-full bg-white dark:bg-gray-800">
      <div className="justify-between flex flex-row items-center w-full">
        <img src={LogoPrever} className="h-16 w-full" />
        <div className="flex flex-row gap-5">
          <div
            className="h-16 w-16 flex items-center justify-center rounded-lg bg-blue-primary-100 cursor-pointer"
            onClick={() =>
              navigate("https://www.instagram.com/prevercamposeliseos")
            }
          >
            <AiFillInstagram className="h-12 w-12 text-white" />
          </div>
          <div
            className="h-16 w-16 flex items-center justify-center rounded-lg bg-blue-primary-100 cursor-pointer"
            onClick={() => navigate("https://www.facebook.com/FamiliaPrever")}
          >
            <AiFillFacebook className="h-12 w-12 text-white" />
          </div>
          <div
            className="h-16 w-16 flex items-center justify-center rounded-lg bg-blue-primary-100 cursor-pointer"
            onClick={() =>
              navigate(
                "https://www.youtube.com/channel/UCUYXvJuZ_E_DksiHW996Prw"
              )
            }
          >
            <AiFillYoutube className="h-12 w-12 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
