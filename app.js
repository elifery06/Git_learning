const express = require("express");
const app = express();
const port = 3007;
const ArabaService = require("./ArabaService");
const araba = require("./araba");
const BusService = require("./BusService");

app.listen(port, () => {
    console.log(`server ${port} portundan çalışıyor`);
});

app.use(express.json());

app.get("/arabalar", (req, res) => {
    console.log("get tetiklendi");

    const arabaInstance = ArabaService.araba_bul(); // ArabaService içindeki fonksiyonu çağırma
    res.json(arabaInstance);
});


app.get("/bus", (req, res) => {
    console.log("get tetiklendi");

    const response = BusService.bus_bul() // ArabaService içindeki fonksiyonu çağırma
    res.json(response);
});




app.post("/arabalar", (req, res) => {
    console.log("post tetiklendi");


    var response = ArabaService.araba_ekle(req.body)

    res.json(response)

})

app.post("/bus", (req, res) => {
    console.log("post tetiklendi");


    var response = BusService.bus_ekle(req.body)

    res.json(response)

})

/*
app.delete("/", (req, res) => {


    console.log("delete tetiklendi")


    res.json(new araba("emre", "34"))

})





app.put("/", (req, res) => {

    console.log(req.body)

    console.log("mongo db de kayıt update edildi")


    res.json(new araba("emre", "34"))

})
*/




