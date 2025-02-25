import React from "react";
import "./Contact.css";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MapComponent from "../../components/MapComponent/MapComponent";

function Contact() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Box
                    bgcolor="#76959c"
                    p={2}
                    borderRadius={5}
                    mb={4}
                    textAlign="center"
                >
                    <Typography variant="h4" color="white" gutterBottom={false}>
                        Bizimle iletişime geçin!
                    </Typography>
                </Box>
                <form>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Adınız"
                            variant="outlined"
                            name="name"
                            required
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Soyadınız"
                            variant="outlined"
                            name="surname"
                            required
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="E-postanız"
                            variant="outlined"
                            type="email"
                            name="email"
                            required
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Mesajınız"
                            variant="outlined"
                            name="message"
                            multiline
                            rows={5}
                            required
                        />
                    </Box>
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
                                fontSize: "1.1rem",
                                padding: "0.75rem 2rem",
                                transition: "all ease 0.3s",
                            }}
                            endIcon={<SendIcon />}
                        >
                            Gönder
                        </Button>
                    </Box>
                </form>
                <MapComponent/>
            </Box>
        </Container>

    );
}

export default Contact;
