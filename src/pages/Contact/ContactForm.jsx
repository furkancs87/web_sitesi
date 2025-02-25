import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        message: "",
    }); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{display: "flex", flexDirection: "column", gap:2  }}>
            <Typography variant="h6">Bizimle İletişime Geçin</Typography>
            <TextField
                label="Adınız"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

           <TextField
                label="Soyadınız"
                variant="outlined"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
            />

            <TextField 
                label="E-posta"
                variant="outlined"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <TextField 
                label="Mesajınız"
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Gönder
            </Button>
        </Box>
    );
};

export default ContactForm;

