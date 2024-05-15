/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { If, Then } from 'react-if';

export interface TimeProps {
    id: string;
    time: string;
}


const Time = (props: TimeProps) => {

     const flex = css`
        display:flex;
        flex-direction: column;
        height:100%;
        width:100%;
        justify-content: center;
        align-items: center;
        align-self: center;
        align-content: center;
        justify-self: center;
    `;
    //backgroundColor: 'orange', fontSize: '20vw', textAlign: 'center', verticalAlign: 'middle', alignContent: 'center' 

    return (
        <div css={ css({ backgroundColor: 'orange', fontSize: '20vw', })}>{props.time}</div>
    );
};

export default Time;
Time.defaultProps = {
};