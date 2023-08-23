const araba = require("./araba");

class ArabaService {
    constructor() { }
    
    static araba_bul() {
        console.log("araba bulmak için mongo db bağlandı");
        return new araba("emre", "34");
    }

    static araba_ekle(araba) {
        console.log(araba);
        console.log("mongo db ye kayıt eklendi");
        return araba;
    }
}

module.exports = ArabaService;
