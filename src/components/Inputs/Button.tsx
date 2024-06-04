/** @jsxImportSource @emotion/react */
import React, {ReactEventHandler, useContext} from 'react';
import {css} from '@emotion/react';
import { If,Then } from 'react-if';
import { buttonStyle } from './styles';
export interface ButtonInputProps {
    id: string;
    onClick:ReactEventHandler;
    value:string|number;
}
const ButtonInput = (props: ButtonInputProps) => {
    return(
        <button css={buttonStyle} onClick={props.onClick} id={props.id}>{props.value}</button>
    );
};

export default ButtonInput;
ButtonInput.defaultProps = {
};