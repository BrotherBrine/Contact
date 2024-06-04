/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
// import React, {useContext} from 'react';
import { css } from '@emotion/react';
import { Else, If, Then } from 'react-if';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useEffect, useState } from 'react';

import { useDebounceCallback } from 'usehooks-ts';
import ColorInput from './Color';
import SelectInput from './Select';
import DateInput from './Date';
import TextAreaInput from './TextArea';
import { fileInputStyle, inputContainerStyle, inputStyle, labelStyle, wrapperStyle } from './styles';
import RangeInput from './Range';
import ButtonInput from './Button';
import FileInput from './File';
import ToggleInput from './Toggle';

export interface InputProps {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    options: SelectOption[];
    value: any;
    onChange: any;
    onClick: any;
    pattern: string;
    min: number;
    max: number;
    minHeight: number | string;
    height: number|string;
    borderSize: number|string;
}
export interface SelectOption {
    display: any, value: string, isPlaceholder: boolean, isSelected: boolean,
}
const Input = (props: InputProps) => {
    const options: SelectOption[] = [...props.options];

    if (props.type == 'select' && props.value == null || props.value == undefined || props.value == '') {
        options.unshift({ display: props.placeholder, value: '', isPlaceholder: true, isSelected: false });
    }
    const deviceType = window.navigator.userAgent;
    const isIOS: boolean = deviceType.includes('iPhone');


    const selectOptionStyle = css`
        background-color: transparent;
        color: black;
        border: solid black 1px;
        border-radius: 5px;
        :hover {
            background-color: red;
        }
    `;

    const selectOptionHover = css`
        border: solid black 3px;
        cursor: pointer;
        background-color: darkolivegreen;
    `;

    const focusStyle = css`
            background: 'none';
            border: 'none';
            outline: 'none';
        `;
    const noLabel = css`visibility:hidden;`;
    const noWrapper = css``;
    const wrapper = (props.type === 'range' || props.type === 'button' || props.type === 'toggle')? noWrapper : wrapperStyle;
    const input = () => {
        switch (props.type.toLowerCase()) {
            case 'color':
                return <ColorInput {...props} />;
            case 'select':
                return <SelectInput {...props} />;
            case 'date':
                return <DateInput {...props} />;
            case 'textarea':
                return <TextAreaInput {...props} />;
            case 'range':
                return <RangeInput {...props} />;
            case 'button':
                return <ButtonInput {...props} />;
            case 'file':
                    return < FileInput {...props} />;
            case 'toggle': 
                return <ToggleInput {...props}/>;
            default:
                return <input css={inputStyle}
                    id={props.id}
                    pattern={props.pattern}
                    type={props.type}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={(e: any) => props.onChange(e.target.value)}>
                </input>
        }
    }

    return (
        <div css={inputContainerStyle}>
            <label css={props.label ? labelStyle : noLabel} htmlFor={props.id}>{props.label ? props.label : props.id}</label>
            <div css={wrapper}>
                <div css={css({ display: 'flex', flexDirection: 'row', width: '100% !important', padding: '0px' })}>
                    {input()}
                </div>
            </div>
        </div>
    );
};

export default Input;
Input.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    options: [],
    onChange: (e: any) => { console.log('e', e); },
    onClick: (e: any) => { console.log('e', e); },
    value: '',
    pattern: null,
    min: null,
    max: null,
    minHeight: null,
    height:null,
    width:null,
    borderSize:null
};