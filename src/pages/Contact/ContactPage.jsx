import React from "react";
import { TextField, Button, Box } from "@mui/material";

const ContactPage = () => {
  return (
    //Harita için iframe yapısını kullandık.
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Sol Taraf: Harita */}
      <div style={{ flex: 1 }}>
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%C3%9Cniversiteler%20Mahallesi%20Hacettepe%20Teknokent%206.Arge%20C%20blok+(Mastersoft%20Ltd.%20%C5%9Eti.)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Hacettepe Teknokent Map"
        ></iframe>
      </div>

      {/* Sağ Taraf: İletişim Formu */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h2>İletişim Formu</h2>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          onSubmit={(e) => {
            e.preventDefault(); // Form gönderimini engelle (backend'e bağlanmadı)
            alert("Mesajınız iletildi! Teşekkür ederiz.");
          }}
        >
          <TextField
            label="Ad"
            variant="outlined"
            required
          />
          <TextField
            label="Soyad"
            variant="outlined"
            required
          />
          <TextField
            label="E-posta"
            type="email"
            variant="outlined"
            required
          />
          <TextField
            label="Mesaj"
            variant="outlined"
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Gönder
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default ContactPage;
