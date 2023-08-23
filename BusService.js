const Bus = require('./bus');

class BusService {
    constructor() { }
    static bus_bul = () => {



        
        console.log("fake mongo db bağlandı")
        return new Bus("k10", 50, "emre")

    }

    static bus_ekle = (bus) => {

        console.log("fake mongo db bağlandı")
        console.log(bus)
        console.log("fake mongo db ye kayıt eklendi")
        return bus

    }


}

module.exports = BusService;

