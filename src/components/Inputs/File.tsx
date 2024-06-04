/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import React, {useContext} from 'react';
import {css} from '@emotion/react';
import { If,Then } from 'react-if';
import { fileStyle, inputStyle } from './styles';
export interface FileInputProps {
    id: string;
    value:any;
    onChange:any;
    placeholder:string;
}

const FileInput = (props: FileInputProps) => {
    // console.log('props',props);
 
    return(
        <input id={props.id} css={inputStyle && fileStyle} type='file' value={props.value} onChange={props.onChange} title={props.placeholder}/>
    );
};

export default FileInput;
FileInput.defaultProps = {
};