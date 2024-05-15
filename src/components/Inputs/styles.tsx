import { css } from "@emotion/react";

export const inputStyle = css`
    width: calc(100% - 20px);
    min-width: calc(100% - 10px);
    color: black;
    border: none;
    padding: 0 0 0 10px !important;
    background: transparent;
    outline: none;
    height: 22px;
    min-height: 22px;
`;

export const wrapperStyle = css`
    border:solid black 1px;
    border-radius: 5px;
    background-color: whitesmoke;
    width:100% !important;
    color:'black';
`;

export const labelStyle = css`    
    width: 100% !important;
    text-align: left;
    font-size: 10px;
    padding-left: 0px;
    margin-bottom: -10px;
    padding-bottom: 10px;
    color: black;
`;
export const inputContainerStyle=css`
    display:flex;
    flex-direction: column;
    padding: 0;
    margin: 5px 0;
`;

export const fileInputStyle=css`
    ${inputStyle}
    &{
        padding:0 !important;
    }
`;