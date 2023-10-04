"use client";

import React, { useContext, useEffect, useState } from "react";
import { MainButton } from "../../../../components/atoms/button/Button";
import styles from "./page.module.css";
import { AppContext } from "@/store/CurrentProvider";

const Detail = () => {
  const [selectedHotel, setSelectedHotel] = useState({
    name: "",
    description: "",
    photo: "",
    country: "",
    city: "",
  });

const {setDetailPage}= useContext(AppContext)


  useEffect(() => {
    const storedHotel = localStorage.getItem("selectedHotel");
    if (storedHotel) {
      setSelectedHotel(JSON.parse(storedHotel));
    }
setDetailPage()

  }, []);
  const { name, photo, description, country, city } = selectedHotel;
  //console.log(selectedHotel);
  return (
    <div className={styles.container}>
      <img src={photo} whith={350} height={350} className={styles.detailImage} />
      <h2> {name} </h2>
      <p>{description}</p>
      <p>Pais:{country} </p>
      <p>Ciudad:{city} </p>

      <div className={styles.buttonsContainer}>
        <MainButton className={styles.buttonCardHotel}>Reservar</MainButton>
        <MainButton className={styles.buttonCarrdHotel}>favoritos</MainButton>
      </div>
    </div>
  );
};
export default Detail;
