"use client"

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import IconButton from "@mui/material/IconButton";
//import MenuIcon from '@mui/icons-material/Menu';
import styles from "./Menu.module.css";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/store/CurrentProvider";

export const Menu = () => {


  const {currentPage}= useContext(AppContext);

const title = (current) =>{
  switch(current){
    case 'Detail':
      return 'Detalle del hotel';
      case 'Home':
        return 'Buscar Hotel';
        default:
          return 'Bienvenidos'
  }
}



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.containerMenu}>
        <Toolbar variant="dense" className={styles.contentOptionMenu}>
          <h3>{title(currentPage)}</h3>
          <Link href={"/"}>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              className={styles.labelMenu}
            >
              Home
            </Typography>
          </Link>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            className={styles.labelMenu}
          >
            Reservas
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
