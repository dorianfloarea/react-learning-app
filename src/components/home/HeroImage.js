import React, {Component} from 'react';
import {Content, Text, Wrapper} from './HeroImage.styles';
import PropTypes from 'prop-types';

class HeroImage extends Component {
    render() {
        const {
                  image,
                  title,
                  text
              } = this.props;

        return (
            <Wrapper image={image}>
                <Content>
                    <Text>
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </Text>
                </Content>
            </Wrapper>
        );
    }
}

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text : PropTypes.string
};

export default HeroImage;