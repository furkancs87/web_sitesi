import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Slider from "react-slick";
import HomeImage from "../../images/header-ai.png";
import MainImage from "../../images/main_ai_last.png";
import ProImage from "../../images/product.png";
import ServiceImage from "../../components/Card/s3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

    // Image Array
    const images = [
        {
            //HomeImage resim
            src: HomeImage,
            alt: "mastersoft bilgisi",
        },

        {
            src: MainImage,
            alt: "makine öğrenmesi ve yapay zeka projeleri",
        },
        {
            src: ProImage,
            alt: "hizmetler bilgisi",
        },
        {
            src: ServiceImage,
            alt: "Image 3",
        },
    ];


const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                right: "10px",
                zIndex: 2,
            }}
            onClick={onClick}
        />
    );
};

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                left: "10px",
                zIndex: 2,
            }}
            onClick={onClick}
        />
    );
};

function Home() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

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

            {/* Image Slider */}
            <Box display="flex" justifyContent="center">
                <Slider {...sliderSettings} style={{ width: "50%" }}>
                    {images.map((image, index) => (
                        <Box key={index} textAlign="center">
                            <img
                                src={image.src}
                                alt={image.alt}
                                style={{
                                    width: "100%", // Tüm genişliği kaplar
                                    height: "250px", // Sabit yükseklik
                                    objectFit: "cover", // Oran koruma
                                    borderRadius: 8,
                                }}
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Container>
    );
}

export default Home;
