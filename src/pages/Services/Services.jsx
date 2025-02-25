import React from "react";
import {
    Container,
    Typography,
    Box,
    Grid,
    CardMedia,
    CardContent,
    Card,
} from "@mui/material";
import Data from "../../components/Card/Data";
import image1 from "../../components/Card/s1.png";
import image2 from "../../components/Card/s2.png";
import image3 from "../../components/Card/s3.png";

function Services() {
    return (
        <Container maxWidth="lg">
            {/* Title Section */}
            <Box
                bgcolor="#76959c"
                p={2}
                borderRadius={5}
                my={4}
                textAlign="center"
            >
                <Typography variant="h4" color="white" gutterBottom={false}>
                    Hizmetler
                </Typography>
            </Box>

            {/* Text Content */}
            <Box textAlign="center" mb={4}>
                <Typography variant="h5" gutterBottom color="#76959c">
                    Sizlere hizmet sağladığımız araçlar...
                </Typography>
            </Box>

            {/* Services Grid */}
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            transition: "transform 0.3s ease-in-out",
                            "&:hover": { transform: "scale(1.05)" },
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={image1}
                            alt="Service 1"
                            sx={{
                                height: 250,
                                borderRadius: 2,
                            }}
                        />
                        <CardContent>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    color: "#76959c",
                                }}
                            >
                                {Data[0].stype}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <a
                                    href="https://example.com"
                                    style={{
                                        textDecoration: "none",
                                        color: "#000",
                                    }}
                                >
                                    {Data[0].sdescription}
                                </a>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            transition: "transform 0.3s ease-in-out",
                            "&:hover": { transform: "scale(1.05)" },
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={image2}
                            alt="Service 2"
                            sx={{
                                height: 250,
                                borderRadius: 2,
                            }}
                        />
                        <CardContent>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    color: "#76959c",
                                }}
                            >
                                {Data[1].stype}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <a
                                    href="https://example.com"
                                    style={{
                                        textDecoration: "none",
                                        color: "#000",
                                    }}
                                >
                                    {Data[1].sdescription}
                                </a>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            transition: "transform 0.3s ease-in-out",
                            "&:hover": { transform: "scale(1.05)" },
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={image3}
                            alt="Service 3"
                            sx={{
                                height: 250,
                                borderRadius: 2,
                            }}
                        />
                        <CardContent>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    color: "#76959c",
                                }}
                            >
                                {Data[2].stype}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <a
                                    href="https://example.com"
                                    style={{
                                        textDecoration: "none",
                                        color: "#000",
                                    }}
                                >
                                    {Data[2].sdescription}
                                </a>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Services;
