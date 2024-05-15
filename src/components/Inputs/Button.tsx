/** @jsxImportSource @emotion/react */
import React, {useContext} from 'react';
import {css} from '@emotion/react';
import { If,Then } from 'react-if';
export interface ButtonInputProps {
    id: string;
    onClick:any;
    value:any;
}
const ButtonInput = (props: ButtonInputProps) => {
    return(
        <button onClick={props.onClick} id={props.id}>{props.value}</button>
    );
};

export default ButtonInput;
ButtonInput.defaultProps = {
};