import React from "react";
import {
    Container,
    Typography,
    Box,
    Button,
    Card,
    CardMedia,
    CardContent,
} from "@mui/material";
import CompanyImage from "../../images/pro1.png";

function Products() {
    return (
        <Container maxWidth="lg" my={4}>
            <Box
                bgcolor="#76959c"
                p={2}
                borderRadius={5}
                my={4}
                textAlign="center"
            >
                <Typography variant="h4" color="white" gutterBottom={false}>
                    Ürünlerimiz
                </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
            >
                <Card sx={{ maxWidth: 500, mb: 4, objectFit: "contain", }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={CompanyImage}
                        alt="Product"
                    />
                    <CardContent>
                        <Typography variant="body1" color="textSecondary">
                        Dijital dünyada işletmelerin en kritik ihtiyaçlarından biri olan log analizi,
                        LOG AI ile akıllı, hızlı ve kullanıcı dostu bir hale geliyor. Hem web hem de mobil
                        arayüzlere sahip olan LOG AI, tüm log verilerinizi tek bir çatı altında toplamanıza, 
                        analiz etmenize ve görselleştirmenize olanak tanır.
                        </Typography>
                    </CardContent>
                </Card>

                {/* Description and Button */}
                <Box sx={{ ml: 4, flex: 1 }}>
                    <Typography variant="h5">
                        LogAI ile neler yapabilirsiniz?
                    </Typography>
                    <br/>
                    <Typography variant="body1" paragraph>
                        <b>Logların Listelenmesi ve Filtrelenmesi:</b> LOG AI, karmaşık log verilerinizi kolayca organize eder. İhtiyacınıza uygun filtreleme seçenekleriyle, aradığınız bilgilere hızlıca ulaşabilirsiniz.<br/>
                        <b>Grafiksel Görselleştirme:</b> Verilerinizi grafiklere dönüştürerek daha anlaşılır ve etkili bir şekilde analiz edin. Zaman serileri, hata oranları ve diğer kritik metrikler, kullanıcı dostu görselleştirmelerle sunulur.<br/>
                        <b>Hata Senaryoları Oluşturma:</b> Uygulamanızın performansını artırmak ve sorunları öngörmek için özel hata senaryoları tasarlayın. LOG AI, algoritmalarıyla bu senaryoları analiz ederek çözümler sunar.<br/>
                        <b>Algoritma Performansı Değerlendirme: </b> Seçilen analiz algoritmalarının doğruluk oranını ve güvenilirliğini değerlendirin. LOG AI, en iyi sonuçlar için optimize edilmiş bir değerlendirme modülü sunar.<br/>
                        <b>Kullanıcı Geri Bildirimleri ile Geliştirme:</b> Kullanıcı deneyimine önem veren LOG AI, geri bildirimlerin toplanmasını ve tasarımların bu doğrultuda iyileştirilmesini destekler.<br/>
                    </Typography>

                    <Box display="flex" justifyContent="center">
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                bgcolor: "#76959c",
                                color: "white",
                                "&:hover": {
                                    bgcolor: "#5e7a7f",
                                    transform: "translateY(5px)",
                                },
                                fontSize: "1rem",
                                padding: "0.75rem 2rem",
                                transition: "all ease 0.3s",
                            }}
                        >
                            Ürün hakkında daha detaylı bilgi için tıklayınız
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Products;
