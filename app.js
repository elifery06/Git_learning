const express = require("express");
const app = express();
const port = 5000;
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

    const response = BusService.bus_bul() // BusService içindeki fonksiyonu çağırma
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

const yeniAraba = new araba({
    marka : ferrari,
        model :2020,
  });
  
  yeniAraba.save()
    .then(() => {
      console.log('Yeni araba eklendi:', yeniAraba);
      mongoose.disconnect();
  
    })
    .catch((err) => {
      console.error('araba oluşturma hatası:', err);
      mongoose.disconnect();
    });
  

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




