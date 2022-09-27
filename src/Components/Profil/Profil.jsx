import React from "react";
// import { Row,Col,Button } from 'react-bootstrap'
import TopNavbar from "../Utility/TopNavbar";
import CardProfil from "./CardProfil";
// import {IoIosContact,IoIosMail, IoIosMale,IoMdCall} from 'react-icons/io'
// import {IoLocationSharp} from 'react-icons/io5'
// import VIPImage from '../../Images/vipimage.png'
// import FotoProfile from '../../Images/profil.jpeg'
import { API, setAuthToken } from "../../config/api";
import { useQuery } from "react-query";
import { UserContext } from "../../context/context";
import { useContext } from "react";
import { useMutation } from "react-query";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Profil() {
  return (
    <>
      <TopNavbar />
      <div
        style={{
          height: "92vh",
          paddingTop: "3.5rem",
          backgroundColor: "#2f2f2f",
        }}
      >
        <CardProfil />
      </div>
    </>
  );
}
