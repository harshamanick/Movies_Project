import express from "express";
import { ObjectId } from "mongodb";
import getNameFromDetails from "../JsUtils/jsUtils.js";
import { getClient } from "../StartUp/DB.js";
const route = express.Router();

route.get('/get_movies', async(request,response)=>{
    try{ 
    const client = getClient();
    const movieCollection = client.db('Movies').collection('Movies');
    const moviesList = await movieCollection.find({}).toArray();
    const movieNames = getNameFromDetails(moviesList);
    response.status(200).send(movieNames);
    } catch(error){
        console.log('errorrr', error);
        response.status(500).send(error);

    }
});
route.get('/get_movie_details_by_id', async(request, response)=>{
    const client = getClient();
    const movieCollection = client.db('Movies').collection('Movies');
    const movieId = new ObjectId( request.query.id);
    try{  
        const movieDetail = await movieCollection.find({_id: movieId}).toArray();
        console.log('???///', movieDetail);
        response.status(200).send(movieDetail);
        } catch(error){
            console.log('???///', error);

            response.status(500).send(error);
    
        }

});

export default route;
