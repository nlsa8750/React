// this file contains all the posts functions

import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    // featured image will contain the id of the file
    // slug is the id of the post
    async createPost({title, slug, content, featuredImage, status, userId})
    {
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )

        } catch(error) {
            console.log("Appwrite service :: createPost :: error " + error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status})
    {
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }

            )
        }
        catch(error)
        {
            console.log("Appwrite service :: updatePost :: error " + error)
        }
    }

    // here slug is the document id
    async deletePost(slug) {
        try {
                await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error " + error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )

        } catch (error) {
            console.log("Appwrite service :: getPost :: error " + error);  
            return false;
        }
    }

    // only get those posts which have an active status
    async getPosts(queries = [Query.equal("status", "active")])
    {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error " + error);  
            return false;
        }

    }

    // file upload service

    // file id will be returned from this function
    // i have changed the name of the function from fileUpload to uploadFile , if error occurs check onto it.
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite service :: fileUpload :: error " + error);   
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error " + error);   
            return false;
        }
    }

    // if you will see the docs , basically this function operates too fast as compared to other function -> it doesn't contain promise, you can use async also
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service;
