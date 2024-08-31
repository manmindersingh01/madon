
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class dataBasesService {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(import.meta.env.VITE_APPWRITE_URL) // Your API Endpoint
      .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);               // Your project ID
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPosts() {
    try {
      return await this.databases.listDocuments(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_APPRITE_COLLECTION_ID,
      )
    } catch (error) {
      console.log("error in getPosts in appWrite", error);

    }
  }
  // file upload
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      import.meta.env.VITE_BUCKET_ID,
      fileId,

    )
  }
}

const service = new dataBasesService();
export default service;