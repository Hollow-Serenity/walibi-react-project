import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div class="topnav">
        <a class="active" href="Index.html">
          Home
        </a>
        <a href="about-us.html">Over ons</a>
        <a href="ticket.html">Bestel je tickets</a>
        <a href="#contact">Contact</a>
      </div>
      <section class="boxes">
        <div class="container">
          <div class="box">
            <h2>
              <i class="fas fa-arrows-alt-v"></i> Abonnement 2023
            </h2>
            <p class="abonnement_2023_text">
              Koop je Walibi abonnement met korting en krijg een dag gratis
              toegang tot de eerste editie van Bright Nights!
            </p>
            <button class="bestel_knop">
              <i class="fa fa-home"></i>Bestellen
            </button>
          </div>

          <div class="box">
            <h2>
              <i class="fas fa-arrows-alt"></i>Bright Nights!
            </h2>
            <br />
            <p class="bright_nights_text">
              Kom naar Walibi Holland tijdens de kerstvakantie en beleef Bright
              Nights van 26 December 2022 t/m 8 januari. Het park is tijdens
              Bright Nights geopend van 12:00 tot 20:00 uur!
            </p>
            <button class="bright_nights_knop">
              <i class="fa fa-home"></i>Bright nights
            </button>
          </div>

          <div class="box">
            <h2>
              <i class="fas fa-mobile"></i>Over ons!
            </h2>
            <p>
              Wil je meer over ons pretpark te weten komen? Over de geschiedenis
              en hoe wij tot het idee zijn gekomen? Klik op de knop hieronder!
            </p>
            <button class="over_ons_knop">
              <i class="fa fa-home"></i>Over ons
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
