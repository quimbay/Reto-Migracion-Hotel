"use client";

import { useState } from "react";
import { hotelData } from "../../../services/gethotelsServices";
import { CardHotel } from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsfilter.module.css";
import { hotelRooms } from "@/app/utils/helper";

export const CardsFilter = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [dateFrom, setDateTo] = useState("all");
  const [dateTo, setDateFrom] = useState("all");

  //console.log(dateTo);
  const filterHotels = (hotels) => {
    const newDateTo = new Date(dateTo);
    const newDatetFrom = new Date(dateFrom);
    const newDateLocalTo = new Date()
    newDateTo.getTime() + newDateTo.getTimezoneOffset() * 60000


    const Today = new Date().setHours(0, 0, 0, 0);
console.log(newDateTo.getTime(), newDatetFrom.getTime());
console.log(newDateTo, newDatetFrom);

  

    const filteredHotels = hotels.filter((hotel) => {
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
        (newDateTo >= availabilityHotels && newDatetFrom <= availabilityDays);

      return isCountryMatch && isPriceMatch && isSizeMatch;
    });
    return filteredHotels;
  };

  return (
    <>
      <Header
        updateCity={setSelectedCountry}
        changePrice={setSelectedPrice}
        changeSize={setSelectedSize}
        changeDateTo={setDateTo}
        changeDateFrom={setDateFrom}
      />
      <div className={styles.cardsContainer}>
        {filterHotels(hotelData).map((hotel, index) => (
          <CardHotel key={index} hotel={hotel} />
        ))}
      </div>
    </>
  );
};
