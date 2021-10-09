import React, {Component} from 'react';
import searchIcon from '../../images/search-icon.svg';
import {Content, Wrapper} from './SearchBar.styles';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    state   = {value: ''};
    timeout = null;

    componentDidUpdate(prevProps, prevState) {
        if (this.state.value === prevState.value) {
            return;
        }
        const {setSearchTerm} = this.props;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            setSearchTerm(this.state.value);
        }, 500);
    }

    render() {
        return (
            <Wrapper>
                <Content>
                    <img src={searchIcon} alt="search-icon"/>
                    <input
                        type="text"
                        placeholder="Search movie"
                        onChange={event => this.setState({value: event.currentTarget.value})}
                        value={this.state.value}
                    />
                </Content>
            </Wrapper>
        );
    }
}

SearchBar.propTypes = {
    callback: PropTypes.func
};

export default SearchBar;