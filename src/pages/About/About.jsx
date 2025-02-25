import React from "react";
import { Container, Typography, Box, CardMedia } from "@mui/material";
import CompanyImage from "../../images/main_ai_last.png";

function About() {
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
                    Hakkımızda
                </Typography>
            </Box>

            <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
            >
                <Box
                    flex={1}
                    mb={{ xs: 4, md: 0 }}
                    mr={{ md: 4 }}
                    textAlign="center"
                >
                    <CardMedia
                        component="img"
                        image={CompanyImage}
                        alt="Company Image"
                        sx={{
                            borderRadius: 5,
                            maxWidth: "100%",
                            height: "auto",
                            transition: "opacity 0.3s ease-in-out", // Smooth opacity transition
                            "&:hover": {
                                opacity: 0.9, // Reduce opacity on hover
                            },
                        }}
                    />
                </Box>

                <Box flex={2}>
                    <Typography variant="h4" gutterBottom color="#76959c">
                        İşimizi tutkuyla yapıyoruz!
                    </Typography>

                    <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                        İş hayatında kurumsal internet uygulamalarının
                        altyapısının kurulumu, yönetimi, izlenmesi ve
                        problemlerin tespiti en iyi olduğumuz alanlardır.
                        Yazılım geliştirme altyapımızda .Net Core, MVC, C#,
                        Python ve Microsoft SQL gibi altyapı ve programlama
                        dillerinde bilgi ve iş deneyimine sahibiyiz. Makine
                        Öğrenmesi ve Yapay Zeka alanında üniversitelerden
                        dersler alınmış ve bu konularda öğretim üyeleri
                        hocalarımız ile iletişimlerimiz devam etmektedir. Proje
                        sorumlumuzun, proje yönetimi (PMP) sertifikası
                        bulunmaktadır.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default About;
