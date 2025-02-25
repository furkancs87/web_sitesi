import React from "react";
import { Container, Box, Typography } from "@mui/material";

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
                >
                    {/* Box 1 */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Hakkımızda
                        </Typography>
                        <Typography variant="body2">
                            Şirket bilgileri ve detayları
                        </Typography>
                    </Box>

                    {/* Box 2 */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            İletişim
                        </Typography>
                        <Typography variant="body2">
                            Email: info@example.com
                        </Typography>
                        <Typography variant="body2">
                            Telefon: +1 (123) 456-7890
                        </Typography>
                    </Box>

                    {/* Box 3 */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Bizi takip edin!
                        </Typography>
                        <Typography variant="body2">
                            Sosyal medya linkleri
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
