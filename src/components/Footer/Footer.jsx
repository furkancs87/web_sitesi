import React from "react";
//import { Container, Box, Typography } from "@mui/material";
import { Container, Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#76959c",
                color: "#fff",
                minHeight: "100px", // set a fixed minimum height
                py: 3, // padding top and bottom
                mt: 0, // margin top
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container maxWidth="md">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection={{ xs: "column", md: "row" }}
                    textAlign={{ xs: "center", md: "left" }}
                    //gap={4}
                >
                    {/* © Yılı ve Şirket Adı */}
                    <Box>
                        &nbsp;
                        <Typography variant="body2">
                            © 2025 Mastersoft
                        </Typography>
                    </Box>
                    {/* Box 1 */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Hakkımızda
                        </Typography>
                        <Typography variant="body2">
                            Kullanım Koşulları ve Gizlilik
                        </Typography>
                    </Box>
           
                    {/* <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Politikalarımız
                        </Typography>
                        <Typography variant="body2">
                            Kullanım Koşulları ve Gizlilik
                        </Typography>
                    </Box> */}

                    {/* Box 2 */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            İletişim
                        </Typography>
                        <Typography variant="body2">
                            <b>Adres:</b> Üniversiteler Mahallesi 1596.Cadde 6.Arge E Blok No:16 Çankaya/Ankara
                        </Typography>
                        <Typography variant="body2">
                            <b>Email:</b> info@mastersoft.com.tr
                        </Typography>
                        <Typography variant="body2">
                            <b>Telefon:</b> +90 (536) 410-5441
                        </Typography>
                    </Box>

                    {/* Box 3 */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Bizi takip edin!
                        </Typography>
                        
                        {/* Sosyal Medya İkonları */}
                        <Box>
                            <IconButton
                                aria-label="Facebook"
                                href="https://facebook.com"
                                target="_blank"
                                sx={{ color: "#fff" }}
                            >
                            <FacebookIcon />
                            </IconButton>

                            <IconButton
                                aria-label="Twitter"
                                href="https://twitter.com"
                                target="_blank"
                                sx={{ color: "#fff" }}
                            >
                            <TwitterIcon />
                            </IconButton>

                            <IconButton
                                aria-label="Instagram"
                                href="https://instagram.com"
                                target="_blank"
                                sx={{ color: "#fff" }}
                            >
                            <InstagramIcon />
                            </IconButton>
                        </Box>


                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
