import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  CardMedia,
} from '@mui/material';
import logoImage from './images/logo.jpg'; // Import the image

function Contact() {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              alt="Contact Image"
              height="450"
              image={logoImage} // Use the imported image
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" align="center" gutterBottom>
              Contact Us
            </Typography>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                </Grid>
                <Box display="flex" justifyContent="center" mt={3}>
                  <Button variant="contained" color="primary" type="submit">
                    Send Message
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Contact;
