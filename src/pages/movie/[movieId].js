import React, {Component} from 'react';
import BreadCrumb from '../../components/movie/BreadCrumb';
import MovieInfo from '../../components/movie/MovieInfo';
import MovieInfoBar from '../../components/movie/MovieInfoBar';
import Grid from '../../components/common/Grid';
import Actor from '../../components/movie/Actor';
import {fetchMovie, fetchMovies} from '../../helpers/movies';

class Movie extends Component {
    render() {
        const {movie} = this.props;

        if (movie === undefined) {
            return <div>Something went wrong...</div>;
        }

        // if (loading) {
        //     return <Spinner/>;
        // }

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
                            profilePath={actor.profile_path}
                        />
                    ))}
                </Grid>
            </>
        );
    }
}

export default Movie;

export async function getStaticPaths(context) {
    const {movies} = await fetchMovies(1);
    const paths    = movies.results.map(({id}) => {
        return {
            params: {
                movieId: id.toString()
            }
        };
    });

    return {
        paths,
        fallback: true
    };
}

export async function getStaticProps(context) {
    const {movieId} = context.params;
    const {movie}   = await fetchMovie(movieId);

    return {
        props: {
            movie
        }
    };
}
