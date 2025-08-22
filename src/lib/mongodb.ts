import { MongoClient } from 'mongodb';

const uri = process.env.DATABASE_URL as string;
if (!uri) {
  throw new Error('Missing DATABASE_URL environment variable');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// In development, use a global variable so the value
// is preserved across module reloads caused by HMR (Hot Module Replacement).
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
