import {useEffect, useState} from 'react';
import API from '../API';
import {getPersistedState, persistState} from '../helpers';

export const useMovieFetch = (movieId) => {
    const [state, setState]     = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie   = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                const directors = credits.crew.filter((member) => member.job === 'Director');

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });

                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };

        const sessionState = getPersistedState(`movie-${movieId}`);

        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }
        fetchMovie();
    }, [movieId]);

    useEffect(() => {
        persistState(`movie-${movieId}`, state);
    }, [movieId, state]);

    return {
        state,
        loading,
        error
    };
};