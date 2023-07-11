import express from "express";
import { connectDb } from "./StartUp/DB.js";
import {Route} from './StartUp/Route.js';
const startServer = async()=>{
  const App = express();
  const port =  3000;
  await connectDb();
  Route(App); 
  App.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}
startServer();