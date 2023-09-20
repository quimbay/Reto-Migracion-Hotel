import { hotelData } from "../../../services/gethotelsServices";
import { CardHotel } from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsfilter.module.css";

export const CardsFilter = () => {
  return (
    <>
      <Header />
      <div className={styles.cardsContainer}>
        {hotelData.map((hotel, index) => ( 
          <CardHotel key={index} hotel={hotel} />
          ))}
      </div>
    </>
  );
};
