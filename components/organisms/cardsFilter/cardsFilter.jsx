"use client"

import { useEffect, useState } from "react";
//import { hotelData } from "../../../services/gethotelsServices";
import { CardHotel } from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsfilter.module.css";
import { hotelRooms } from "../../../src/app/utils/helper";
import { Alert, AlertTitle,Snackbar  } from "@mui/material";

//import { use } from "express/lib/application";

export const CardsFilter = ({getDataHotels}) => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [dateFrom, setDateTo] = useState("all");
  const [dateTo, setDateFrom] = useState("all");
  const [filterHotels, setFilterHotels] = useState([]);
  const [setshowSnackbar, setShowSnackbar] = useState(false);
  const [botonActivo,setBotonActivo] = useState(false);
  //const [hotelsData, setHotelsData] = useState([]);



  //const fetchHotels = async () => {
    //try {
      //const data = await hotelData();
    //setHotelsData(data);
   // } catch (error) {
    //  console.log('error en la api de hotel');
    //}
    
  //};

 // useEffect(() => {
   // fetchHotels();
 // }, []);

  //console.log(dateTo);
  

  useEffect(() => {
    const newDateTo = new Date(dateTo);
    const newDatetFrom = new Date(dateFrom);
    const Today = new Date().setHours(0, 0, 0, 0);
    const newDateLocalTo = new Date(
      newDateTo.getTime() + newDateTo.getTimezoneOffset() * 60000
    );
    const newDateLocalFrom = new Date(
      newDatetFrom.getTime() + newDatetFrom.getTimezoneOffset() * 60000
    );

    //console.log(newDateTo.getTime(), newDatetFrom.getTime());
    //console.log(newDateTo, newDatetFrom);

    const filteredHotels = getDataHotels.filter((hotel) => {
      const availabilityHotels = Today + hotel.availabilityFrom;
      const availabilityDays = availabilityHotels + hotel.availabilityTo;

      const isCountryMatch =
        selectedCountry === "all" ||
        selectedCountry.toLocaleLowerCase() ===
          hotel.country.toLocaleLowerCase();

      const isPriceMatch =
        selectedPrice === "all" ||
        selectedPrice.toString() === hotel.price.toString();

      const isSizeMatch =
        selectedSize === "all" || selectedSize === hotelRooms(hotel.rooms);

      const availability =
        (dateTo === "all" && dateFrom === "all") ||
        (newDateLocalTo.getTime() >= availabilityHotels &&
          newDateLocalFrom.getTime() <= availabilityDays);

      return isCountryMatch && isPriceMatch && isSizeMatch && availability;
    });
    setFilterHotels(filteredHotels);
  },[
    selectedCountry,
    selectedPrice,
    selectedSize,
    dateFrom,
    dateTo,
    getDataHotels
  ]);

  return (
    <>
      <Header
        updateCity={setSelectedCountry}
        changePrice={setSelectedPrice}
        changeSize={setSelectedSize}
        changeDateTo={setDateTo}
        changeDateFrom={setDateFrom}
      />
      {filterHotels.length > 0 ? (
        <div className={styles.cardsContainer}>
          {filterHotels.map((hotel, index) => (
            <CardHotel key={index} hotel={hotel} snackbar={setShowSnackbar} />
          ))}
        </div>
      ) : (
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          No hay resultados para su busqueda —
          <strong>Por favor utilice otra opciòn</strong>
        </Alert>
      )}
      <Snackbar
  open={setshowSnackbar}
  autoHideDuration={2000}
  onClose={setShowSnackbar}>
  
  <Alert severity="success" sx={{ width: '100%' }}>
   Hotel agregado correctamente 
  </Alert>
</Snackbar>
    </>
  );
};
