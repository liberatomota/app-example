import { Db, MongoClient } from 'mongodb';

let client: MongoClient;
let clientPromise: Promise<MongoClient>;
console.log(process.env.MONGODB_URI);
if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(process.env.MONGODB_URI);  // No options needed for most configurations
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(process.env.MONGODB_URI);  // Simplified constructor call
    clientPromise = client.connect();
}

const getDatabase = async (): Promise<Db> => {
    const client: MongoClient = await clientPromise;
    const dbName: string | undefined = process.env.MONGODB_ROOT_DATABASE;

  if (!dbName) {
    throw new Error("The MONGODB_ROOT_DATABASE environment variable is not set.");
  }

  return client.db(dbName);
  }

export default getDatabase;
