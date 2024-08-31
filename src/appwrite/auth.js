import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client()

  account;
  constructor() {
    this.client
      .setEndpoint(import.meta.env.VITE_APPWRITE_URL) // Your API Endpoint
      .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);               // Your project ID
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {

    try {
      const accountUser = await this.account.create(ID.unique(), email, password, name);
      if (accountUser) {
        //call
        console.log("Account created successfully");
        return this.login({ email, password });
      } else {
        return accountUser;
      }
    } catch (error) {

    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password)
    } catch (error) {
      console.log("error :: erroe in login appwrite", error);

    }
  }
  //login with google
  async loginWithGoogle() {
    try {
      return this.account.createOAuth2Session("google", 'http://localhost:5173/', 'http://localhost:5173/fail');
    } catch (error) {
      console.log("error :: erroe in loginWithGoogle appwrite", error);

    }
  }
  //login with facebook

  //check user is logged in or not

  //get current user


  async getCurrentUser() {
    try {
      return await this.account.getSession('current');
    } catch (error) {
      console.log("error :: erroe in getCurrentUser appwrite", error);

    }
    return null;
  }
  async logout() {
    try {
      await this.account.deleteSessions()
    } catch (error) {
      console.log("error in logout appwrite", error);

    }
  }
};


const authService = new AuthService();
export default authService;