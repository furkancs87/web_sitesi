import React from "react";
import { Grid, Container, Card, CardContent } from "@mui/material";
import MapComponent from "../../components/MapComponent/MapComponent";
import ContactForm from "./ContactForm";

function Contactmap() {
    return (
        <Container maxWidth="lg" sx={{ marginTop: 4}} >
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        {/* Harita */}
                        <Grid item xs={12} md={6}>
                            <MapComponent />
                        </Grid>

                        {/*iletişim formu*/}
                        <Grid item xs={12} md={6}>
                            <ContactForm/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}

export default Contactmap;