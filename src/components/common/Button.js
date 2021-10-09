import React, {Component} from 'react';
import {Wrapper} from './Button.styles';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        const {text, callback} = this.props;

        return (
            <Wrapper type="button" onClick={callback}>
                {text}
            </Wrapper>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func
}

export default Button;