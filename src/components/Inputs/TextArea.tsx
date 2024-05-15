/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
// import {css} from '@emotion/react';
import { inputStyle } from './styles';
import { css } from '@emotion/react';
export interface TextAreaInputProps {
    id: string;
    minHeight: number | string;
    value:string;
    onChange: any;
}
const TextAreaInput = (props: TextAreaInputProps) => {
    const areaStyle = css`${inputStyle} & {min-height:${props.minHeight}px; margin:5px -5px; padding:-5px; } `;
    return (
        <textarea css={areaStyle} id={props.id} value={props.value} onChange={(e)=>props.onChange(e.target.value.toString())}></textarea>
    );
};

export default TextAreaInput;
TextAreaInput.defaultProps = {
    minHeight:  30,
};