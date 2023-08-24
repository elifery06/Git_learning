const araba = require("./araba");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

class ArabaService {
    constructor() { }

    static async araba_bul() {
        console.log("araba bulmak için mongo db bağlandı");

        const uri = "mongodb+srv://elifery06:hasnur_2009@cluster0.wzgyiqc.mongodb.net/"; // MongoDB bağlantı adresi
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        try {
            await client.connect();

            const database = client.db("car_services"); // Bu kod parçası, MongoDB istemcisine bağlandıktan sonra belirli bir veritabanını seçiyor.
            const arabalarCollection = database.collection("arabalar"); // Bu kod parçası, seçilen veritaban içinde "arabalar" adında bir koleksiyon seçmeye yarar.

            const bulunanAraba = await arabalarCollection.findOne({ plaka: "34 ABC 123" }); // Örnek bir sorgu ,findOne işlevi, belirtilen kriteri sağlayan ilk belgeyi döndürür.

            if (bulunanAraba) {
                console.log("MongoDB'den bulunan araba:", bulunanAraba);
                return bulunanAraba;
            } else {
                console.log("Araba bulunamadı.");
                return null;
            }
        } catch (error) {
            console.error("Hata oluştu:", error);
            return null;
        } finally {
            client.close();
        }
    }

    static async araba_ekle(yeniAraba) {
        console.log("mongo db'ye araba ekleniyor...");

        const uri = "mongodb+srv://elifery06:hasnur_2009@cluster0.wzgyiqc.mongodb.net/"; // MongoDB bağlantı adresi
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        try {
            await client.connect();

            const database = client.db("car_services");
            const arabalarCollection = database.collection("arabalar");

            const eklenecekAraba = {
                marka: yeniAraba.marka,
                plaka: yeniAraba.plaka
            };

            const sonuc = await arabalarCollection.insertOne(eklenecekAraba);

            console.log("MongoDB'ye eklendi:", sonuc.ops[0]);
            return sonuc.ops[0];
        } catch (error) {
            console.error("Hata oluştu:", error);
            return null;
        } finally {
            client.close();
        }
    }
}

module.exports = ArabaService;


// static araba_ekle(araba) {
//     console.log(araba);
//     console.log("mongo db ye kayıt eklendi");
//     return araba;
// }

















// const araba = require("./araba");

// class ArabaService {
//     constructor() { }
    
//     static araba_bul() {
//         console.log("araba bulmak için mongo db bağlandı");
//         //araba bulma kodu
//         return new araba("emre", "34");

//     }

//     static araba_ekle(araba) {
//         console.log(araba);
//         console.log("mongo db ye kayıt eklendi");
//         return araba;
//     }
// }


// module.exports = ArabaService;
