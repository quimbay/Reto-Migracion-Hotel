
import {Button} from "@mui/material";

export const MainButton = ({chidren, ...props}) =>{
    return(
        <Button size="Large"{... props}>
            {chidren}
        </Button>

    )
};