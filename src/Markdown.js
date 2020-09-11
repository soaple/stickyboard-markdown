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
    border-radius: 16px;
    overflow: auto;
    border: 0.5px solid #9b9b9b;
`;

const MenuContainer = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`;

const MenuButton = styled.button`
    width: 100%;
    padding: 4px 8px;
    &:not(:last-child) {
        margin-bottom: 8px;
    }
    border: 1px solid #bbbbbb;
    border-radius: 8px;
    font-size: 16px;
    color: #333333;
    background-color: #ffffff;
`;

const Editor = styled(TextareaAutosize)`
    font-size: 16px;
    color: #333333;
    resize: none;
    background-color: transparent;
    border: 0;
    &:focus {
        outline: none;
    }
`;

class Markdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false,
            contentForEdit: props.content,
        };
    }

    toggleEditMode = () => {
        this.setState(
            (prevState) => ({
                isEditMode: !prevState.isEditMode,
            }),
            () => {
                const { isEditMode, contentForEdit } = this.state;
                const { onSave } = this.props;

                if (!isEditMode && onSave && typeof onSave === 'function') {
                    onSave(contentForEdit);
                }
            }
        );
    };

    onChangeContent = (event) => {
        this.setState({
            contentForEdit: event.target.value,
        });
    };

    render() {
        const { isEditMode, contentForEdit } = this.state;
        const { editable, content, onSave } = this.props;

        return (
            <Wrapper>
                {isEditMode ? (
                    <Editor onChange={this.onChangeContent} value={contentForEdit} />
                ) : (
                    <ReactMarkdown source={content} />
                )}

                {/* Menu */}
                {editable && (
                    <MenuContainer>
                        <MenuButton onClick={() => this.toggleEditMode()}>
                            {isEditMode ? 'Save' : 'Edit'}
                        </MenuButton>
                    </MenuContainer>
                )}
            </Wrapper>
        );
    }
}

Markdown.propTypes = {
    editable: PropTypes.bool,
    content: PropTypes.string,
    onSave: PropTypes.func,
};

export default Markdown;
