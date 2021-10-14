import React, {Component} from 'react';
import NoImage from '../../public/images/no_image.jpg';
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from '../config';
import Grid from '../components/common/Grid';
import Thumb from '../components/common/Thumb';
import HeroImage from '../components/home/HeroImage';
import {fetchMovies} from '../helpers/movies';

class Index extends Component {
    render() {

        const {movies}   = this.props;
        const searchTerm = '';
        const heroResult = movies.results[0];

        return (
            <div>
                {!searchTerm && heroResult && <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroResult.backdrop_path}`}
                    title={heroResult.original_title}
                    text={heroResult.overview}
                />}
                {/*<SearchBar setSearchTerm={(searchTerm) => this.handleSearch(searchTerm)}/>*/}
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
                {/*{loading && <Spinner/>}*/}
                {/*{movies.page < movies.total_pages && !loading && (*/}
                {/*    <Button text="Load More" callback={() => this.handleLoadMore()}/>*/}
                {/*)}*/}
            </div>
        );
    }
}

export default Index;

export async function getStaticProps(context) {
    const {movies} = await fetchMovies(1);

    return {
        props: {
            movies
        }
    };
}