import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box, Container } from "@mui/material";
import MastersoftLogo from "../../images/mastersoft_lg.png";

export default function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#76959c" }}>
            <Container maxWidth="lg">
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    {/* Logo */}
                    <Link to="/">
                        <img
                            src={MastersoftLogo}
                            alt="Mastersoft Logo"
                            style={{
                                height: "50px",
                                borderRadius: "5px",
                            }}
                        />
                    </Link>

                    {/* Navigation Links */}
                    <Box sx={{ display: "flex", gap: 10 }}>
                        <Button
                            component={Link}
                            to="/"
                            sx={{
                                color: "white",
                                border: "2px solid transparent",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    color: "#ffff",
                                    border: "2px ridge #ffff",
                                    backgroundColor: "transparent",
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            Anasayfa
                        </Button>
                        <Button
                            component={Link}
                            to="/about"
                            sx={{
                                color: "white",
                                border: "2px solid transparent",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    color: "#ffff",
                                    border: "2px ridge #ffff",
                                    backgroundColor: "transparent",
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            Hakkımızda
                        </Button>
                        <Button
                            component={Link}
                            to="/services"
                            sx={{
                                color: "white",
                                border: "2px solid transparent",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    color: "#ffff",
                                    border: "2px ridge #ffff",
                                    backgroundColor: "transparent",
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            Hizmetler
                        </Button>
                        <Button
                            component={Link}
                            to="/products"
                            sx={{
                                color: "white",
                                border: "2px solid transparent",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    color: "#ffff",
                                    border: "2px ridge #ffff",
                                    backgroundColor: "transparent",
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            Ürünler
                        </Button>
                        <Button
                            component={Link}
                            to="/contact"
                            sx={{
                                color: "white",
                                border: "2px solid transparent", // Base border
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    color: "#ffff", // Change text color
                                    border: "2px ridge #ffff",
                                    backgroundColor: "transparent", // Keep background transparent
                                    transform: "scale(1.05)", // Slight zoom effect
                                },
                            }}
                        >
                            İletişim
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
