import path from 'path';
import {readFile, writeFile} from 'fs/promises';

export const getMoviesFromCache = async (page) => {
    console.log('getMoviesFromCache', page);
    const cachePath = path.resolve('.data', `movies-page-${page}.json`);
    return await getDataFromCache(cachePath);
};

export const saveMoviesInCache = async (page, movies) => {
    console.log('saveMoviesInCache', page);
    const cachePath = path.resolve('.data', `movies-page-${page}.json`);
    return await saveDataInCache(cachePath, movies);
}

export const getMovieFromCache = async (movieId) => {
    console.log('getMovieFromCache', movieId);
    const cachePath = path.resolve('.data', `movie-${movieId}.json`);
    return await getDataFromCache(cachePath);
}

export const saveMovieInCache = async (movieId, movies) => {
    console.log('saveMovieInCache', movieId);
    const cachePath = path.resolve('.data', `movie-${movieId}.json`);
    return await saveDataInCache(cachePath, movies);
}

export const getCreditsFromCache = async (movieId) => {
    console.log('getCreditsFromCache', movieId);
    const cachePath = path.resolve('.data', `movie-${movieId}-credits.json`);
    return await getDataFromCache(cachePath);
}

export const saveCreditsInCache = async (movieId, credits) => {
    console.log('saveCreditsInCache', movieId);
    const cachePath = path.resolve('.data', `movie-${movieId}-credits.json`);
    return await saveDataInCache(cachePath, credits);
}

const getDataFromCache = async (cachePath) => {
    try {
        return JSON.parse(await readFile(cachePath));
    } catch (error) {
        console.log(error);
    }
};

const saveDataInCache = async (cachePath, data) => {
    try {
        await writeFile(cachePath, JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}
