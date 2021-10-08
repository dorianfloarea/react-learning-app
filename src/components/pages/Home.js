import React from 'react';
import NoImage from '../../images/no_image.jpg';
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
import {useHomeFetch} from '../../hooks/useHomeFetch';
import HeroImage from '../home/HeroImage';
import Grid from '../common/Grid';
import Thumb from '../common/Thumb';
import Spinner from '../common/Spinner';
import SearchBar from '../home/SearchBar';
import Button from '../common/Button';

const Home = () => {
    const {
              state,
              loading,
              error,
              searchTerm,
              setSearchTerm,
              setIsLoadingMore
          } = useHomeFetch();

    if (error) {
        return <div>Something went wrong...</div>;
    }

    const heroResult = state.results[0];

    return (
        <>
            {!searchTerm && heroResult && <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroResult.backdrop_path}`}
                title={heroResult.original_title}
                text={heroResult.overview}
            />}
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm ? 'Search results' : 'Popular movies'}>
                {state.results.map(({
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
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
            )}
        </>
    );
};

export default Home;