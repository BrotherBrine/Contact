/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { If, Then } from 'react-if';
import { SelectOption } from './Input';
import { inputStyle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import SelectPicker from './SelectPicker';
export interface SelectInputProps {
    id: string;
    value: any;
    onChange: any;
    options: SelectOption[];
    placeholder: string;
}
const SelectInput = (props: SelectInputProps) => {
    const options = [...props.options];
    options.forEach(o => { o.isSelected = o.value === props.value })

    // const inputStyle = css`
    //     // width:props.type=='color'?'calc(100% + 10px)':'100%',
    //     width: 99%;
    //     color: black;
    //     border: none;
    //     padding: 0px !important;
    //     background: transparent;
    //     outline: none;
    //     height:22px;
    //     `;
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
    // const selectStyle = css`
    //     :hover:{
    //         cursor: pointer;
    //     }
    // `;
    const selectStyle = css`
    ${inputStyle};
    caret-color: transparent;
    min-width: calc(100% - 24px);
    width: calc(100% - 24px) ;
        :hover{
        cursor: pointer;

    }`;

    const [showPicker, setShowPicker] = useState(false);
    const [pickerPosition, setPickerPosition] = useState({ top: 0, left: 0 });
    const togglePicker = () => {
        console.log('showPicker', showPicker);
        setShowPicker(!showPicker);
    }

    const updatePosition = ()=>{
        const el: HTMLElement = document.getElementById(props.id + '-display');
        const position = el ? { top: el.offsetTop + el.offsetHeight, left: el.offsetLeft, width: el.offsetWidth } : { top: 0, left: 0, width: 0 };
        console.log('position', position);
        setPickerPosition(position);
    };

    useEffect(() => {
        updatePosition();
    }, [showPicker]);
    
    useEffect(()=>{
        addEventListener('resize',updatePosition);
        return ()=>{
            removeEventListener('resize',updatePosition);
        };
    },[]);

    return (
        <div css={css({ display: 'flex', flexDirection: 'column', width: '100%', height: '22px' })}>
            <div css={css({ width: '100%', display: 'flex', flexDirection: 'row' })}>
                <input id={props.id + '-display'} css={selectStyle} placeholder={props.placeholder} onClick={togglePicker}></input>
                <FontAwesomeIcon icon={solid('caret-down')} color='black' onClick={togglePicker}></FontAwesomeIcon>
                {/* <select id={props.id} css={css({ display: 'none', visibility: 'hidden' })} value={props.value} onChange={(e: any) => {
                props.onChange(e.target.value);
            }}>
                {options.map(function (o: SelectOption, key: number) {

                    return <option value={o.value} key={key}> </option>
                    // if (o.isPlaceholder) {
                    //     return <option disabled css={selectOptionStyle} value={o.value} key={i}>{o.display}</option>
                    // }
                    // if(o.isSelected){
                    //     return <option selected css={selectOptionStyle} value={o.value} key={i}>{o.display}</option>
                    // }
                    // else {
                    //     return <option css={selectOptionStyle} value={o.value} key={i}>{o.display}</option>
                    // }
                })}
            </select> */}
            </div>
            <SelectPicker id={props.id + '-picker'} options={props.options} visible={showPicker} position={pickerPosition} closePicker={() => { console.log('dddd') }} />
        </div>
    );
};

export default SelectInput;
SelectInput.defaultProps = {
};