import React, {Component} from 'react';
import NoImage from '../../images/no_image.jpg';
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
import HeroImage from '../home/HeroImage';
import Grid from '../common/Grid';
import Thumb from '../common/Thumb';
import Spinner from '../common/Spinner';
import SearchBar from '../home/SearchBar';
import Button from '../common/Button';
import API from '../../API';
import {getPersistedState, persistState} from '../../helpers';

const initialState = {
    page         : 0,
    results      : [],
    total_pages  : 0,
    total_results: 0
};

class Home extends Component {
    state = {
        movies       : initialState,
        searchTerm   : '',
        isLoadingMore: false,
        loading      : false,
        error        : false
    };

    async fetchMovies(page, searchTerm = '') {
        try {
            this.setState({
                error  : false,
                loading: true
            });

            const movies = await API.fetchMovies(searchTerm, page);

            this.setState(prev => ({
                ...prev,
                movies : {
                    ...movies,
                    results:
                        page > 1 ? [
                            ...prev.movies.results,
                            ...movies.results
                        ] : [...movies.results]
                },
                loading: false
            }));
        } catch (error) {
            console.log(error);
            this.setState({
                error  : true,
                loading: false
            });
        }
    }

    handleSearch(searchTerm) {
        this.setState({searchTerm});

        if (searchTerm) {
            this.setState({
                movies: initialState
            }, () => {
                this.fetchMovies(1, this.state.searchTerm);
            });

            return;
        }

        this.getPopularMovies();
    }

    getPopularMovies() {
        const sessionState = getPersistedState('homeState');

        if (sessionState) {
            this.setState({movies: sessionState});
            return;
        }

        this.fetchMovies(1);
    }

    handleLoadMore() {
        this.fetchMovies(this.state.movies.page + 1, this.state.searchTerm);
    }

    componentDidMount() {
        this.getPopularMovies();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.movies === this.state.movies) {
            return;
        }

        if (this.state.searchTerm) {
            return;
        }

        persistState('homeState', this.state.movies);
    }

    render() {
        const {
                  movies,
                  error,
                  loading,
                  searchTerm
              }          = this.state;
        const heroResult = movies.results[0];

        if (error) {
            return <div>Something went wrong...</div>;
        }

        return (
            <>
                {!searchTerm && heroResult && <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroResult.backdrop_path}`}
                    title={heroResult.original_title}
                    text={heroResult.overview}
                />}
                <SearchBar setSearchTerm={(searchTerm) => this.handleSearch(searchTerm)}/>
                <Grid header={searchTerm ? 'Search results' : 'Popular movies'}>
                    {movies.results.map(({
                                             id,
                                             title,
                                             poster_path
                                         }) => (
                        <Thumb
                            key={id}
                            clickable
                            image={poster_path ? IMAGE_BASE_URL + POSTER_SIZE + poster_path : NoImage}
                            movieId={id}>
                            {title}
                        </Thumb>
                    ))}
                </Grid>
                {loading && <Spinner/>}
                {movies.page < movies.total_pages && !loading && (
                    <Button text="Load More" callback={() => this.handleLoadMore()}/>
                )}
            </>
        );
    }
}

export default Home;