/** @jsxImportSource @emotion/react */
import React, {useContext} from 'react';
import {css} from '@emotion/react';
import { If,Then } from 'react-if';
export interface ToggleInputProps {
    id: string;
}
const ToggleInput = (props: ToggleInputProps) => {
    return(
        <div id={props.id}>Toggle</div>
    );
};

export default ToggleInput;
ToggleInput.defaultProps = {
};