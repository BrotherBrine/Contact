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
export const inputContainerStyle = css`
    display:flex;
    flex-direction: column;
    padding: 0;
    margin: 5px 0;
`;

export const fileInputStyle = css`
    ${inputStyle}
    &{
        padding:0 !important;
    }
`;

export const switchSize: number = 20;//props.switchHeight;
export const switchBorderSize: number = 2;// props.switchBorderSize;
export const switchContainerWidth: number = (switchSize + switchBorderSize) * 2;
export const switchMovement = switchContainerWidth - switchSize - (switchBorderSize * 2);
export const switchMovementDuration = 300;
const offPosition = (switchSize / 2);

export const toggleSwitch = css`
    position: relative;
    left:-${offPosition}px;
    height: ${switchSize}px;
    width: ${switchSize}px;
    background-color: green;
    border: solid black ${switchBorderSize}px;
    border-radius: ${switchSize + switchBorderSize / 2}px;
`;

export const switchOff = css`
    ${toggleSwitch};
    animation-duration: ${switchMovementDuration}ms;
    animation-name: toggleOff;
    animation-timing-function: linear;
    @keyframes toggleOff {
    from {
        transform: translateX(${switchMovement}px);
    }
    to {
        transform: translateX(${offPosition}px);
    }
    }
`;

export const switchOn = css`
    ${toggleSwitch};
    transform: translateX(${switchMovement}px);
    animation-duration: ${switchMovementDuration}ms;
    animation-timing-function: linear;
    animation-name: toggleOn;
    @keyframes toggleOn {
    from {
        transform: translateX(${offPosition}px);
    }
    to {
        transform: translateX(${switchMovement}px);
    }
    }
`;

export const toggleContainerOff = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: ${switchSize + switchBorderSize * 2}px;
    width: ${switchContainerWidth}px;
    border: solid ${switchBorderSize}px black;
    border-radius: ${switchSize}px;
    background-color:gray;
    &:hover {
    cursor: pointer;
    }
`;
export const toggleContainerOn = css`
    ${toggleContainerOff};
    background-color:yellow;
`;