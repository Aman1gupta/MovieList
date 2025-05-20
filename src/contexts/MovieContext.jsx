import { createContext, useState, useContext, useEffect } from "react";

const MovieContext=createContext()

export const useMovieContext =() => useContext(MovieContext)
export const MovieProvider =({children})=>{
    const[favorites, setFavourites]=useState([])

    useEffect(()=>{
        const storedFavs=localStorage.getItem("favorites")
        if(storedFavs)setFavourites(JSON.parse(storedFavs))
    },[])

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])
    const addToFavorites =(movie)=>{
        
    }
    
    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
}