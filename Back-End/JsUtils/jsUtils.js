const getNameFromDetails = (list) =>{
    console.log('???//', list);
    const movieNames = list.map((movie)=>{
        return {
            movie_name: movie?.movie_name,
            movie_Id: movie?._id,
        }
    });
    return movieNames;
}

export default getNameFromDetails;
