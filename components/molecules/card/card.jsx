import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./card.module.css";
import { MainButton } from "../../atoms/button/Button";
import Link from "next/link";

export const CardHotel = ({ hotel, snackbar }) => {
  //const { name } = hotel;
  const handleClick = () => {
    localStorage.setItem("selectedHotel", JSON.stringify(hotel));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        className={styles.imageHotel}
        sx={{ height: 140 }}
        image={hotel.photo}
        title={hotel.name}
      />
      <CardContent className={styles.containerInfo}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={styles.titleHotel}
        >
          {hotel.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.descriptionHotel}
        >
          {hotel.description}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.price}
        >
          Price: ${hotel.price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.countryCityHotel}
        >
          Coutry: {hotel.country}, City: {hotel.city}
        </Typography>
      </CardContent>
      <CardActions className={styles.containerButton}>

        <Link href={`detail/${hotel.name}`}>
          <MainButton className={styles.buttonCardHotel} onClick={handleClick}>
            Detalles
          </MainButton>
        </Link>

        <MainButton
          className={styles.buttonCardHotel}
          onClick={() => snackbar(true)}
        >
          Reservas
        </MainButton>
      </CardActions>
    </Card>
  );
};
