import express from "express";
import Movies from '../Route/Movies.js';
import cors from 'cors';

export const Route = (App)=>{
    App.use(cors());
    App.use(express.json());
    App.use('/api/movies', Movies)

}