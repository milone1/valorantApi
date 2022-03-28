import { useState,useEffect } from "react";
import { getDataFromValorant } from "../peticiones/Peticion";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";

export const Home = () => {
    const [valorant, setValorant] = useState([]);

    const fetchValorantList = async () => {
        const listValorant = await getDataFromValorant();   
        setValorant(listValorant.data);
    }

    useEffect(() => {

        fetchValorantList();
    }, []);

    return (
        <>
            <Container>
                <h1>VALORANT API</h1>
                <Grid container spaciong={3}>
                    {valorant.length > 0 && valorant.map( objet =>(
                        <Grid item md={4} lg={4} sm={12} xs={12}>
                            <Card sx={{ width: 300 }}>
                                <CardMedia className='img-valorant' component='img' image={objet.fullPortrait || objet.fullPortraitV2 || objet.bustPortrait || objet.displayIcon || objet.displayIconSmall}/> 
                                <CardContent>
                                    <h2>{objet.displayName}</h2>
                                    <p>{objet.description}</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}