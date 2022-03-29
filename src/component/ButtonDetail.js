import { React, useState } from "react";
import { Button,Dialog, DialogContent,Grid, Chip } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { getDataFromValorant } from "../peticiones/Peticion";

export const ButtonDetail =(props) => {
    const [open, setOpen] = useState(false);

    const [objeto, setObjeto] = useState([]);

    const fetchDataFromValorant = async() => {
        const data = await getDataFromValorant();
        setObjeto(data.data);
    };


    const handleOpenDialog = async() => {
        if (!open){
            await fetchDataFromValorant();
        }
        setOpen(!open);
    };


    return (
        <>
            <Button onClick={handleOpenDialog} variant='contained'>
                detalles:
            </Button>
            
            <Dialog open={open} onClose={handleOpenDialog} fullWidth={"md"} maxWidth={"md"}>
                <DialogContent>
                    {Object.keys(objeto) > 0 && (
                        <div>
                            <h1>{props.name}</h1>
                            <Grid container>
                                <Grid item md={6}>
                                    <h4>Habilidades:</h4>
                                    {objeto.abilities.map((habilidades) => {
                                        <Chip label={habilidades.slot} color="primary" sx={{ marginRight : 2}}/>
                                    })}
                                </Grid>
                            </Grid>
                        </div>
                    )}
                    <Button onClick={handleOpenDialog} variant="contained" size="large" color="error">
                        <CloseRoundedIcon />
                    </Button>   
                </DialogContent>
            </Dialog>
        </>
    );
}