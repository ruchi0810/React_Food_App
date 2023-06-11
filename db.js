const mongoose = require("mongoose");
//for fetching data
const mongoURI =
  "mongodb+srv://ruchi:ruchi2771@cluster0.dnkwsju.mongodb.net/foodmern?retryWrites=true&w=majority";
module.exports = function (callback) {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
    if (err) console.log("---" + err);
    else {
      // var database =
      console.log("connected to mongo");
      const foodCollection = await mongoose.connection.db.collection(
        "food_items"
      );
      foodCollection.find({}).toArray(async function (err, data) {
        const categoryCollection = await mongoose.connection.db.collection(
          "foodCategory"
        );
        categoryCollection.find({}).toArray(async function (err, Catdata) {
          console.log(data);
          //console.log(Catdata);
          callback(err, data, Catdata);
        });
      });
      //console.log(foodCollection);
      // listCollections({name: 'food_items'}).toArray(function (err, database) {
      // });
      //     module.exports.Collection = database;
      // });
    }
  });
};

// module.exports = async function fetchData() {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true });
//     console.log("Connected to MongoDB");

//     const foodCollection = mongoose.connection.db.collection("food_items");
//     const data = await foodCollection.find({}).toArray();

//     const categoryCollection = mongoose.connection.db.collection("");
//     const Catdata = await categoryCollection.find({}).toArray();
//     console.log(data);
//     console.log(Catdata);

//     return { data, Catdata };
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// };

// module.exports = async function fetchData() {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true });
//     console.log("Connected to MongoDB");

//     const foodCollection = mongoose.connection.db.collection("food_items");
//     const data = await foodCollection.find({}).toArray();

//     const categoryCollection = mongoose.connection.db.collection("Categories");
//     const Catdata = await categoryCollection.find({}).toArray();
//     console.log(Catdata);

//     return { data, Catdata };
//   } catch (error) {
//     console.log("....");
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// };
// async function getData() {
//   try {
//     const { data, Catdata } = await fetchData();
//     // Handle the fetched data here
//     console.log("Fetched data:", data);
//     console.log("Fetched category data:", Catdata);
//   } catch (error) {
//     // Handle any errors that occurred during data fetching
//     console.error("Error:", error);
//   }
// }

// // Call the getData function to fetch the data
// getData();
