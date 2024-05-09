const { MongoClient } = require('mongodb');
require('dotenv').config();

// MongoDB connection URI
const uri = process.env.MONGODB_URI;

// Create a MongoDB client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');

        // Use the connected client to perform database operations
        const db = client.db('mydatabase');
        const collection = db.collection('mycollection');

        // Perform CRUD operations
        // Example: Insert a document
        await collection.insertOne({ name: 'John', age: 30 });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect to MongoDB
connectToMongoDB();