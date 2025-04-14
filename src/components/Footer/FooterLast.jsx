import React from "react";
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
                py: 3,
                mt: 4,
            }}
        >
            <Container maxWidth="lg">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={{ xs: "column", md: "row" }}
                    textAlign={{ xs: "center", md: "left" }}
                    gap={2}
                >
                    {/* © Yılı ve Şirket Adı */}
                    <Typography variant="body2">
                        © 2025 Mastersoft
                    </Typography>

                    {/* Kullanım Koşulları ve Gizlilik */}
                    <Link href="#" color="inherit" underline="hover">
                        Kullanım Koşulları ve Gizlilik
                    </Link>

                    {/* İletişim */}
                    <Link href="mailto:info@mastersoft.com.tr" color="inherit" underline="hover">
                        İletişim
                    </Link>

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
            </Container>
        </Box>
    );
}

export default Footer;
