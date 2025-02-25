import React from "react";
import { Container, Typography, Box, CardMedia } from "@mui/material";
import HomeImage from "../../images/header-ai.png";

function Home() {
    return (
        <Container maxWidth="lg">
            <Box
                bgcolor="#76959c"
                p={2}
                borderRadius={5}
                my={4}
                textAlign="center"
            >
                <Typography variant="h4" color="white" gutterBottom={false}>
                    Yapay Zeka Çözümlerimiz Sizlerle!
                </Typography>
            </Box>

            {/* Text Content */}
            <Box textAlign="center" mb={4}>
                <Typography variant="h5" gutterBottom color="#76959c">
                    Yenilikçi Çözümlerimiz siz değerli müşterilerimiz için!
                </Typography>

                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                    Mastersoft olarak kuruluşumuzun ana faaliyet alanı makine
                    öğrenmesi, derin öğrenme ve yapay zeka algoritmalarının
                    kullanıldığı yazılım ve donanım projeleri geliştirmektir.
                    Başlıca ürünümüz, internet üzerinden hizmet veren kurumların
                    sunucu ve uygulamalarına yapılan siber güvenlik ve
                    performans ile ilgili anormal durumları tespit eden yazılım
                    olacaktır.
                </Typography>
            </Box>

            {/* Company Image */}
            <Box display="flex" justifyContent="center">
                <CardMedia
                    component="img"
                    image={HomeImage}
                    alt="Home Image"
                    sx={{
                        width: "50%",
                        height: "auto",
                        borderRadius: 2,
                        transition: "opacity 0.3s ease-in-out", // Smooth opacity transition
                        "&:hover": {
                            opacity: 0.9, // Reduce opacity on hover
                        },
                    }}
                />
            </Box>
        </Container>
    );
}

export default Home;
