import { css } from "@emotion/react";

// ***general***
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
    color:black;
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
    color:black;
`;

// *** button ***
export const buttonStyle =css`
    height:24px;
    border-radius: 5px;
    border:solid black 1px;
    background-color: green;
    display:flex;
    width:auto; 
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    margin: 5px 0;
    font-size: 13px;
    :hover{
        cursor:pointer;
        outline:none;
        border:solid black 1px;
    }
    :focus{
        outline:none;
        //add focus color
    }
    :active{
        border-width: 3px;
        padding:0 8px;
        outline:none;
        border-color: black;
    }
`;

// ***toggle***
export const toggleStyle = (size: number = 22, borderSize: number = 1,width:number=2) => {

    const switchSizeFactor: number = width;
    const switchSize: number = size - (borderSize * 2);
    const switchContainerWidth: number = (switchSize * switchSizeFactor) + (borderSize * 2);
    const switchMovement = switchContainerWidth - size + (borderSize*2)-2;
    const switchMovementDuration = 300;
    const offPosition = (switchContainerWidth - switchSize - borderSize) / 2;

    const toggleSwitch = css`
        position: relative;
        left:-${offPosition}px;
        height: ${switchSize}px;
        width: ${switchSize}px;
        background-color: green;
        border: solid black ${borderSize}px;
        border-radius: ${(switchSize + borderSize) / 2}px;
    `;
    const switchOff = css`
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
    const switchOn = css`
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
    const toggleContainerOff = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: ${size}px;
        width: ${switchContainerWidth}px;
        border: solid ${borderSize}px black;
        border-radius: ${size}px;
        background-color:gray;
        &:hover {
            cursor: pointer;
        }
    `;
    const toggleContainerOn = css`
        ${toggleContainerOff};
        background-color:yellow;
    `;
    return {
        toggleSwitch: toggleSwitch,
        switchOff: switchOff,
        switchOn: switchOn,
        toggleContainerOff: toggleContainerOff,
        toggleContainerOn: toggleContainerOn
    }
};

// ***file input***
export const fileInputStyle = css`
    ${inputStyle}
    &{
        padding:0 !important;
    }
    :hover{
        cursor:pointer;
        outline:none;
        border:solid black 1px;
    }
    :focus{
        outline:none;
        //add focus color
    }
    :active{
        border-width: 3px;
        padding:0 8px;
        outline:none;
        border-color: black;
    }
`;

export const fileStyle = css`
&::file-selector-button{
    background-color:green;
    /* border-radius: 3px 3px 0 0; */
    border-radius: 0px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border:none;
    height:22px;
    font-size: 13px;
    padding:0 5px;
    :hover{
        cursor:pointer;
        outline:none;
    }
    :focus{
        outline:none;
        //add focus color
    }
    :active{
        outline:none;
        border:solid black 2px;
        padding:0 3px;
    }
}
`;