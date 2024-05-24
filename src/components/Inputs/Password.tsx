/** @jsxImportSource @emotion/react */
import React, {useContext} from 'react';
import {css} from '@emotion/react';
import { If,Then } from 'react-if';
import { ActiveTheme } from '../context';
export interface PasswordProps {
    id: string;
    value:string;
    maxLength:number;
    minLength:number;
}
const Password = (props: PasswordProps) => {
const {id,value,maxLength,minLength} = {...props};
    return(
        <input id={id} value={value} maxLength={maxLength}minLength={minLength}></input>
    );
};

export default Password;
Password.defaultProps = {
};