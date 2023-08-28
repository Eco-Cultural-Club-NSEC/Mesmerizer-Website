
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

import { NavLink } from "react-router-dom";

import "./footer.css";

export default function Footer() {
  return (
    <Box
      className="footer-main-container"
      component="footer"
      sx={{
        background: "#F1673F",
        p: 8
      }}
    >
      <Container className="footer-root" maxWidth="lg">
        <Grid className="footer-grid" container spacing={1}>
          <Grid className="grid-header" item xs={12} sm={4}>
            <Typography
              className="footer-header"
              variant="h2"
              color="#FFC145"
              gutterBottom
            >
              MES
              <br />
              <span>MER</span>
              <br />
              IZER
            </Typography>
            <div className="page-links">
              <ul>
                <li>
                  <NavLink className="a" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="a" to="/events">
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink className="a" to="/galary">
                    Galary
                  </NavLink>
                </li>
                <li>
                  <NavLink className="a" to="/teams">
                    Teams
                  </NavLink>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="grid-contact">
              <Typography
                className="contact-text"
                variant="h3"
                color="#fff"
                gutterBottom
              >
                Contact Us
              </Typography>
              <Typography
                className="conatct-content"
                variant="body1"
                color="text.secondary"
              >
                Netaji Subhash Engineering College
                <br />
                Mauza Ranabhutia, Techno City, Garia, West Bengal 700152
                <br />
                +91 81000 36329 / +91 87778 37273
              </Typography>
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.743167840082!2d88.41237027483524!3d22.47628373649441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1692310225845!5m2!1sen!2sin"
                  title="map"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Grid>
          <Grid className="media-links" item xs={12} sm={2}>
            <Typography
              className="follow-text"
              variant="h3"
              color="#fff"
              gutterBottom
            >
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook className="icons" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 2, pr: 2 }}
            >
              <Instagram className="icons" />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter className="icons" />
            </Link>
          </Grid>
        </Grid>
        <Box className="footer-copyright" mt={5}>
          <Typography
            className="copyright-text"
            variant="body1"
            color="#fff"
            align="center"
          >
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              by Mesmerizer Proudly created by Marketing Team of Eco Cultural
              Club
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
