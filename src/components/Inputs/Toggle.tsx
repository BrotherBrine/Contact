/** @jsxImportSource @emotion/react */
import React, {useContext} from 'react';
import {css} from '@emotion/react';
import { If,Then } from 'react-if';

import { switchBorderSize,switchHeight,switchMovement,switchMovementDuration,switchOff,switchOn,switchWidth,toggleContainerOn,toggleContainerOff } from './styles';

export interface ToggleInputProps {
    id: string;
    value: boolean;
    onClick:any;
}
const ToggleInput = (props: ToggleInputProps) => {
    
const {id, value,onClick} = props;
    return(
        <div css={value===true?toggleContainerOn:toggleContainerOff} onClick={onClick}>
        <div css={value===true?switchOn:switchOff}>
        <input aria-checked={value} id={id} type='checkbox' css={css({visibility:'hidden'})}></input>
        </div>
        </div>
    );
};

export default ToggleInput;
ToggleInput.defaultProps = {
};