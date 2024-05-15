/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
// import {css} from '@emotion/react';

import { css } from "@emotion/react";

// import { If,Then } from 'react-if';
export interface RangeInputProps {
    id: string;
    value: number;
    max: number;
    min: number;
    onChange: any;
}


const sliderStyle = css({
    ':& input[type="range"]': {
        WebkitAppearance: 'none'
    }});


// const sliderStyle = css`
//      input[type="range"] &:{
//   -webkit-appearance: none;
//   appearance: none;
//   background: transparent;
//   cursor: pointer;
//   width: 15rem;
// }`;


// css({
//     width: '5%', paddingRight: '100px', alignSelf: 'end', flexShrink: '50', '& :hover': {
//         cursor: 'pointer'
//     }
// })
const RangeInput = (props: RangeInputProps) => {
    return (
        <input id={props.id} css={sliderStyle} type='range' max={props.max} min={props.min} value={props.value} onChange={(e) => {
            const val = parseInt(e.target.value);
            console.log('range change val', val);
            props.onChange(val);
        }}></input>
    );
};

export default RangeInput;
RangeInput.defaultProps = {
    min: 0,
    max: 100
};