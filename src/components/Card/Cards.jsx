import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

function Cards(props) {
    return (
        <Card
            sx={{
                maxWidth: 345,
                boxShadow: 3,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                    transform: "scale(1.05)",
                },
            }}
        >
            <CardMedia
                component="img"
                image={props.simage}
                alt="service-image"
                sx={{
                    height: 180,
                }}
            />
            <CardContent>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        marginBottom: 1,
                        color: "#ff5722",
                    }}
                >
                    {props.stype}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <a
                        href="https://example.com"
                        style={{
                            textDecoration: "none",
                            color: "#1976d2",
                            fontWeight: "bold",
                        }}
                    >
                        {props.sdescription}
                    </a>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Cards;
