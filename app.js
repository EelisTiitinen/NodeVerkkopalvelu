// NODE-PALVELIN
// =============


// KIRJASTOT
// ---------

const express = require("express");
const {engine} = require("express-handlebars");

// SOVELLUKSEN ASETUKSET
// ---------------------

const PORT = process.env.PORT || 8000;

// Luo sovellus
const app = express();


app.use(express.static('public'));

// Luo view engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// URL-REITIT
// ----------

// Kotisivun reitti
app.get("/", (req, res) => {
    res.render("index");
});

// Infosivun reitti

// Yhteistietosivun reitti

// SUORITA SOVELLUS
// ----------------

app.listen(PORT);
console.log("Palvelin aloitettu");