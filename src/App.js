import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Navbar,
  Nav,
  Offcanvas,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { Heart, MapPin, Calendar, Clock, Users, Camera } from "lucide-react";
import "./index.css";
import mn1 from "./images/mn1.jpg";
import mn2 from "./images/mn2.jpg";
import mn3 from "./images/mn3.jpg";
import mn4 from "./images/mn4.jpg";
import mn5 from "./images/mn5.jpg";
import mn6 from "./images/mn6.jpg";
import mn7 from "./images/mn7.jpg";
import mn8 from "./images/mn8.jpg";

import ppr2 from "./images/ppr2.jpg";

const DEFAULT_IMAGES = [mn1, mn2, mn3, mn4, mn5, mn6, mn7, mn8];
const DEFAULT_IMAGES2 = [ppr2];

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          total: distance,
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.total <= 0) {
    return (
      <div className="countdown-celebration">
        <h2 className="celebration-text">🎉 It's Wedding Time! 🎉</h2>
        <p className="celebration-subtext">The big day is here!</p>
      </div>
    );
  }

  return (
    <div className="countdown-container">
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.days}</div>
        <div className="countdown-label">Days</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.hours}</div>
        <div className="countdown-label">Hours</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.minutes}</div>
        <div className="countdown-label">Minutes</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.seconds}</div>
        <div className="countdown-label">Seconds</div>
      </div>
    </div>
  );
}

function FloatingHearts() {
  return (
    <div className="floating-hearts">
      {[...Array(6)].map((_, i) => (
        <Heart key={i} className={`floating-heart heart-${i + 1}`} />
      ))}
    </div>
  );
}

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [data, setData] = useState({
    groomName: "Manikanta",
    brideName: "Nagaveni",
    date: "2025-10-03T02:00:00",
    muhurtham: "02:00 AM to 03:00 AM",
    reception: " Thursday, Oct 02 7:00 PM onwards",
    venueAddress:
      "PPR Convention Hall, Near RTO Office, Thattivaripalli  Madanapalle (Bypass Road), Andhra Pradesh, India",
    images: DEFAULT_IMAGES,
    images2: DEFAULT_IMAGES2,

    story:
      "“True love is not possession, it is liberation.” – Bhagavad Gita",
    phone: "+91 7997417411",
  });

  const targetDate = new Date(data.date);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setShowSidebar(false);
  };

  return (
    <div className="wedding-app">
      <FloatingHearts />

      {/* Navbar */}
      <Navbar className="custom-navbar" expand={false} fixed="top">
        <Container>
          <Navbar.Brand className="brand-text">
            <Heart className="brand-icon" />
            {data.groomName} & {data.brideName}
          </Navbar.Brand>
          <Button
            className="menu-toggle"
            onClick={() => setShowSidebar(true)}
            variant="outline-light"
          >
            ☰
          </Button>
        </Container>
      </Navbar>

      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        placement="end"
        className="custom-sidebar"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="sidebar-title">
            <Heart className="me-2" />
            Wedding Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column sidebar-nav">
            <Nav.Link
              onClick={() => scrollToSection("hero")}
              className="sidebar-link"
            >
              <Heart className="me-2" /> Home
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("story")}
              className="sidebar-link"
            >
              <Users className="me-2" /> Our Story
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("countdown")}
              className="sidebar-link"
            >
              <Clock className="me-2" /> Countdown
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("venue")}
              className="sidebar-link"
            >
              <MapPin className="me-2" /> Venue
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("gallery")}
              className="sidebar-link"
            >
              <Camera className="me-2" /> Gallery
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("card")}
              className="sidebar-link"
            >
              <Calendar className="me-2" /> Wedding Details
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Hero Section */}

      <section id="hero" className="hero-section ">
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${data.images[0]})` }}
        >
          <div className="hero-overlay">
            <Container className="hero-content">
              <div className="hero-text">
                <h1 className="hero-names">
                  {data.groomName}
                  <Heart className="heart-divider" />
                  {data.brideName}
                </h1>
                <p className="hero-date">
                  {new Date(data.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <div className="hero-countdown">
                  <CountdownTimer targetDate={targetDate} />
                </div>
                <Button
                  className="hero-cta"
                  size="lg"
                  onClick={() => scrollToSection("card")}
                >
                  View Wedding Details
                  <Heart className="ms-2" />
                </Button>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="story-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="story-content">
                <h2 className="section-title">Our Love Story</h2>
                <p className="story-text">{data.story}</p>
                <p className="story-text">
                  “Marriage in Hindu dharma is not just a social ceremony. It is
                  a sacred bond of body, mind, and soul. Through Sapta Padi, the
                  couple promises love, trust, and dharma for seven lifetimes.
                  Husband and wife are not two, but one in spirit. Together they
                  walk the path of righteousness and happiness.”
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="story-image">
                <img
                  src={data.images[3]}
                  alt="Couple"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Enhanced Countdown */}
      <section id="countdown" className="countdown-section">
        <Container className="text-center">
          <h2 className="section-title2">Countdown to Forever</h2>
          <p className="section-subtitle2">
            Every second counts as we eagerly await our special day
          </p>
          <CountdownTimer targetDate={targetDate} />
        </Container>
      </section>

      {/* Venue */}
      <section id="venue" className="venue-section">
        <Container>
          <h2 className="section-title text-center mb-5">Wedding Venue</h2>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="venue-card shadow-lg">
                <div className="venue-image-container">
                  <Card.Img
                    variant="top"
                    src={data.images2[0]}
                    className="venue-image"
                  />
                  <div className="venue-overlay">
                    <MapPin className="venue-icon" />
                  </div>
                </div>
                <Card.Body className="venue-details">
                  <Card.Title className="venue-title">
                    Celebration Venue
                  </Card.Title>
                  <Card.Text className="venue-address">
                    <MapPin className="me-2" />
                    {data.venueAddress}
                  </Card.Text>
                  <div className="venue-actions">
                    {/* <Button 
                      className="venue-btn"
                      href={`https://maps.app.goo.gl/trQigY87rTSwH3NH9=${encodeURIComponent(data.venueAddress)}`} 
                      target="_blank"
                    >

                      <MapPin className="me-2" />
                      View on Maps
                    </Button> */}

                    <Button
                      className="venue-btn"
                      href="https://maps.app.goo.gl/trQigY87rTSwH3NH9"
                      target="_blank"
                    >
                      <MapPin className="me-2" />
                      View on Maps
                    </Button>

                    <Button
                      className="venue-btn ms-3"
                      // variant="outline-primary"
                      href={`tel:${data.phone}`}
                    >
                      Call Venue
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery */}

      <section id="gallery" className="gallery-section">
        <Container>
          <h2 className="section-title text-center mb-5">Memories</h2>
          <Row>
            {data.images.map((image, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <div className="gallery-item">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <Camera className="gallery-icon" />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Wedding Card */}
      {/* <section id="card" className="wedding-card-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="wedding-invitation shadow-lg">
                <Card.Body className="invitation-content">
                  <div className="invitation-header">
                    <Heart className="invitation-heart" />
                    <h2 className="invitation-title">You're Invited</h2>
                  </div>

                  <div className="couple-names">
                    <h3>
                      {data.groomName} & {data.brideName}
                    </h3>
                  </div>

                  <div className="wedding-details">
                    <div className="detail-item">
                      <Calendar className="detail-icon" />
                      <div>
                        <h5>Wedding Date</h5>
                        <p>
                          {new Date(data.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="detail-item">
                      <Clock className="detail-icon" />
                      <div>
                        <h5>Muhurtham</h5>
                        <p>{data.muhurtham}</p>
                      </div>
                    </div>

                    <div className="detail-item">
                      <Users className="detail-icon" />
                      <div>
                        <h5>Reception</h5>
                        <p>{data.reception}</p>
                      </div>
                    </div>

                    <div className="detail-item">
                      <MapPin className="detail-icon" />
                      <div>
                        <h5>Venue</h5>
                        <p>{data.venueAddress}</p>
                      </div>
                    </div>
                  </div>

                  <div className="invitation-footer">
                    <p>
                      We joyfully request your presence as we begin our journey
                      as one
                    </p>
                    {/* <Button className="rsvp-btn" size="lg">
                      <Heart className="me-2" />
                      RSVP Now
                    </Button> 
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section id="card" className="wedding-card-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="wedding-invitation hindu-card shadow-lg">
                <Card.Body className="invitation-content">
                  <div className="invitation-header">
                    <Heart className="invitation-heart" />
                    <h2 className="invitation-title">You're Invited</h2>
                  </div>

                  <div className="couple-names">
                    <h3>
                      {data.groomName} & {data.brideName}
                    </h3>
                  </div>

                  <div className="wedding-details">
                    <div className="detail-item">
                      <Calendar className="detail-icon" />
                      <div>
                        <h5>Wedding Date</h5>
                        <p>
                          {new Date(data.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="detail-item">
                      <Clock className="detail-icon" />
                      <div>
                        <h5>Muhurtham</h5>
                        <p>{data.muhurtham}</p>
                      </div>
                    </div>

                    <div className="detail-item">
                      <Users className="detail-icon" />
                      <div>
                        <h5>Reception</h5>
                        <p>{data.reception}</p>
                      </div>
                    </div>

                    <div className="detail-item">
                      <MapPin className="detail-icon" />
                      <div>
                        <h5>Venue</h5>
                        <p>{data.venueAddress}</p>
                      </div>
                    </div>
                  </div>

                  <div className="invitation-footer">
                    <p>
                      We joyfully request your presence as we begin our journey
                      as one
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="wedding-footer">
        <Container className="text-center">
          <div className="footer-content">
            <Heart className="footer-heart" />
            <p>
              Made with love for {data.groomName} & {data.brideName}
            </p>
            <p className="footer-tech ">developed by Ashok</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
