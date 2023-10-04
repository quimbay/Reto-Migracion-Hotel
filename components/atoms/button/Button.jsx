
import {Button} from "@mui/material";

export const MainButton = ({children,...props}) =>{
    return(
        <Button size="Large" {...props}>
            {children}
        </Button>

    )
};