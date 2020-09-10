// src/Markdown.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';

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

const ButtonWrapeer = styled.div`
    font: 1em;
    text-align: right;
    position: fix;
`;

const Button = styled.button`
    background-color: #5287FA; 
    color: black;
    border: none;
    border-radius: 3px;
`;

const Editer = styled(TextareaAutosize)`
    resize: none;
    background-color:transparent; 
    border: 0;
    &:focus{
      outline: none;
    }
`;

class Markdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonType: false,
            buttonLabel : 'Edit',
            content : this.props.content
        };
    }

    buttonClick() {
      const { content, buttonType } = this.state;
      const { onSave } = this.props;  

      if (buttonType) {
        onSave(content);
        this.setState({
          buttonType: false,
          buttonLabel: 'Edit'
        });
      } else {
        this.setState({
          buttonType: true,
          buttonLabel: 'Save'
        });
      }
    }

    getEditType(){
      const { content, buttonType } = this.state;

      if (buttonType) {
        return (
          <Editer 
            onChange={(e) => {
              this.setState({
                content: e.target.value
              });
            }}
            value={content} />
        );
      } else {
        return (<ReactMarkdown source={content} />);
      }
    }

    render() {
        const { buttonLabel } = this.state;   
        const { editActive }  = this.props;
        const editType = this.getEditType();

        return (
          <Wrapper>
            {
              editActive && (
                <ButtonWrapeer>
                  <Button onClick={() => this.buttonClick()}>
                    {buttonLabel}
                  </Button>              
                </ButtonWrapeer>
              )
            }
            { editType }
          </Wrapper>
        );
    }
}

Markdown.propTypes = {
  content: PropTypes.string,
  onSave : PropTypes.func,
  editActive : PropTypes.bool
};

export default Markdown;