import API from '../API';
import {getCreditsFromCache, getMovieFromCache, getMoviesFromCache, saveCreditsInCache, saveMovieInCache, saveMoviesInCache} from './cache';

export const fetchMovies = async (page) => {
    let movies = await getMoviesFromCache(page);

    if (!movies) {
        movies = await getMoviesFromApi(page);
        await saveMoviesInCache(page, movies);
    }

    return {movies};
};

export const fetchMovie = async (movieId) => {
    let movie   = await getMovieFromCache(movieId),
        credits = await getCreditsFromCache(movieId);

    if (!movie) {
        movie = await getMovieFromApi(movieId);
        await saveMovieInCache(movieId, movie);
    }

    if (!credits) {
        credits = await getCreditsFromApi(movieId);
        await saveCreditsInCache(movieId, credits);
    }

    const directors = credits.crew.filter((member) => member.job === 'Director');

    return {
        movie: {
            ...movie,
            actors: credits.cast,
            directors
        }
    };
};

const getMoviesFromApi = async (page) => {
    try {
        return await API.fetchMovies('', page);
    } catch (error) {
        throw new Error(error);
    }
};

const getMovieFromApi = async (movieId) => {
    try {
        return await API.fetchMovie(movieId);
    } catch (error) {
        throw new Error(error);
    }
};

const getCreditsFromApi = async (movieId) => {
    try {
        return await API.fetchCredits(movieId);
    } catch (error) {
        throw new Error(error);
    }
};
