// src/Markdown.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Wrapper = styled.div`
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    background-color: #FFDAD3;
    border-radius: 16px;
    overflow: auto;
`;

class Markdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { content } = this.props;
        return (
          <Wrapper>
            <ReactMarkdown source={content}/>
          </Wrapper>
        );
    }
}

Markdown.propTypes = {
  content: PropTypes.string
};

export default Markdown;
