import React, {Component} from 'react';
import {Content, Wrapper} from './MovieInfoBar.styles';
import {calcTime, convertMoney} from '../../helpers';
import PropTypes from 'prop-types';

class MovieInfoBar extends Component {
    render() {
        const {
                  time,
                  budget,
                  revenue
              } = this.props;

        return (
            <Wrapper>
                <Content>
                    <div className="column">
                        <p>Running time: {calcTime(time)}</p>
                    </div>
                    <div className="column">
                        <p>Budget: {convertMoney(budget)}</p>
                    </div>
                    <div className="column">
                        <p>Revenue: {convertMoney(revenue)}</p>
                    </div>
                </Content>
            </Wrapper>
        );
    }
}

MovieInfoBar.propTypes = {
    time   : PropTypes.number,
    budget : PropTypes.number,
    revenue: PropTypes.number
};

export default MovieInfoBar;