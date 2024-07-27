// this file contains all the authentication features such as login , logout , signup and other things.

import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService{

    // The Client object in Appwrite is used to set up and configure the connection to your Appwrite server.
    // in short client is made to use the appwrite
    client = new Client();
    account;

    // this will be called only if new object is created "new AuthService()"
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

            // The Account object in Appwrite is used to handle all user-related operations, such as registration, login, logout, and user profile management.
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique() ,email, password, name)
            if(userAccount){
                // if the user exists then let's make him login the account 
                return this.login({email, password});
            }
            else {
                return userAccount;
            }

        } catch(error) 
        {
            console.log("Appwrite service :: createAccount :: error " + error);
        }
    }

    async login({email, password}) {
        try{
            return await this.account.createEmailPasswordSession(email,password);
        } catch(error)
        {
            throw error;
        }
    }

    async getCurrentUser() {
        try{
            return await this.account.get();
        }
        catch(error){
            console.log("Appwrite service :: getCurrentUser :: error " + error);
        }

        return null;
    }

    // 
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch(error) {
            console.log("Appwrite service :: logout :: error " + error);
        }
    }

}

// this object is created because if somebody wants to access the class (directly export the class) -> everytime the new object needs to be created, so instead of exporting the class, why don't we directly export the object.

// when someone calls this object, then only the client object is created so that redundant storage is not created unnecessary
export const authService = new AuthService();

export default authService
