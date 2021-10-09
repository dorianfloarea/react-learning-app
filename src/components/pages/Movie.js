import React, {Component} from 'react';
import Spinner from '../common/Spinner';
import BreadCrumb from '../movie/BreadCrumb';
import MovieInfo from '../movie/MovieInfo';
import MovieInfoBar from '../movie/MovieInfoBar';
import Grid from '../common/Grid';
import Actor from '../movie/Actor';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
import NoImage from '../../images/no_image.jpg';
import API from '../../API';
import {useParams} from 'react-router-dom';
import {getPersistedState, persistState} from '../../helpers';

class Movie extends Component {
    state = {
        movie  : {},
        loading: true,
        error  : false
    };

    movieKey() {
        return `movie-${this.props.movieId}`;
    }

    componentDidMount() {
        const sessionState = getPersistedState(this.movieKey());

        if (sessionState) {
            this.setState({
                movie  : sessionState,
                loading: false
            });
            return;
        }

        this.fetchMovie();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.movie === this.state.movie) {
            return;
        }

        persistState(this.movieKey(), this.state.movie);
    }

    async fetchMovie() {
        try {
            this.setState({
                loading: true,
                error  : false
            });

            const movie   = await API.fetchMovie(this.props.movieId);
            const credits = await API.fetchCredits(this.props.movieId);

            const directors = credits.crew.filter((member) => member.job === 'Director');

            this.setState((prev) => ({
                ...prev,
                movie  : {
                    ...movie,
                    actors: credits.cast,
                    directors
                },
                loading: false
            }));
        } catch (error) {
            this.setState({
                error  : true,
                loading: false
            });
        }
    }

    render() {
        const {
                  movie,
                  error,
                  loading
              } = this.state;

        if (error) {
            return <div>Something went wrong...</div>;
        }

        if (loading) {
            return <Spinner/>;
        }

        return (
            <>
                <BreadCrumb movieTitle={movie.original_title}/>
                <MovieInfo movie={movie}/>
                <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/>
                <Grid header="Actors">
                    {movie.actors.map(actor => (
                        <Actor
                            key={actor.credit_id}
                            name={actor.name}
                            character={actor.character}
                            imageUrl={
                                actor.profile_path
                                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                    : NoImage
                            }
                        />
                    ))}
                </Grid>
            </>
        );
    }
}

const MovieWithParams = (props) => {
    const {movieId} = useParams();

    return (<Movie {...props} movieId={movieId}/>);
};

export default MovieWithParams;