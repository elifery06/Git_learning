const Bus = require('./bus');
const MongoClient = require('mongodb').MongoClient;

class BusService {
    constructor() { }

    static  bus_bul = async (busId) => {
        try {
            const uri = 'mongodb+srv://elifery06:hasnur_2009@cluster0.wzgyiqc.mongodb.net/'; // MongoDB URI
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const database = client.db('car_services'); // Replace 'your_db_name' with your actual database name
            const busesCollection = database.collection('buses'); // Replace 'buses' with your actual collection name

            const foundBus = await busesCollection.findOne({ _id: busId });

            if (foundBus) {
                console.log("Bus found in MongoDB:", foundBus);
                return new Bus(foundBus.busNumber, foundBus.capacity, foundBus.driverName);
            } else {
                console.log("Bus not found in MongoDB");
                return null;
            }
        } catch (error) {
            console.error("Error while querying MongoDB:", error);
            return null;
        } finally {
            client.close(); // Close the MongoDB connection
        }
    }

    static async bus_ekle(bus) {
        try {
            const uri = 'mongodb+srv://elifery06:hasnur_2009@cluster0.wzgyiqc.mongodb.net/'; // MongoDB URI
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const database = client.db('car_services'); // Replace 'your_db_name' with your actual database name
            const busesCollection = database.collection('buses'); // Replace 'buses' with your actual collection name

            const busData = {
                busNumber: bus.busNumber,
                capacity: bus.capacity,
                driverName: bus.driverName
            };

            const result = await busesCollection.insertOne(busData);
            console.log("Bus added to MongoDB:", result.insertedId);

            return bus;
        } catch (error) {
            console.error("Error while adding bus to MongoDB:", error);
            return null;
        } finally {
            client.close(); // Close the MongoDB connection
        }
    }
}

module.exports = BusService;
