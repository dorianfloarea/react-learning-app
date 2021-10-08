import React, {useEffect, useRef, useState} from 'react';
import searchIcon from '../../images/search-icon.svg';
import {Content, Wrapper} from './SearchBar.styles';
import PropTypes from 'prop-types';

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('');
    const initial           = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        return () => clearTimeout(timer);
    }, [
        setSearchTerm,
        state
    ]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon"/>
                <input
                    type="text"
                    placeholder="Search movie"
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

SearchBar.propTypes = {
    callback   : PropTypes.func
};

export default SearchBar;