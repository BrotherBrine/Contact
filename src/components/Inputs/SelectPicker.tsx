/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import React, { ReactPropTypes, useContext } from 'react';
import { css } from '@emotion/react';
import DateInput from './Date';
// import { If,Then } from 'react-if';
// import { ActiveTheme } from '../context';

export interface PickerOption {
    id:string;
    value:string;
    display:string;
    selected:boolean;
}
export interface SelectPickerProps {
    id: string;
    visible: boolean;
    closePicker: any;
    position: any;
    options:PickerOption[];
    selected:number|number[]|null;
}

const SelectPicker = (props: SelectPickerProps) => {

    console.log('props', props);
    const {id,visible,closePicker,position,options,selected} = props;
    // const {theme,setTheme} = useContext(ActiveTheme);
    const height = props.visible?'auto':'0px'
    const pickerStyle = css`
        /* margin-top: 3px; */
        /* transform: translateX(-1px); */
        min-height:${props.visible ? 150 : 0}px;
        max-height:${props.visible ? 250 : 0}px;
        position: relative;
        z-index: 5;
        /* width:${props.position.width + 14}px; */
        width:calc(100% + 1px);
        background-color: white;
        color:green;
        border:solid green ${props.visible ? 1 : 0}px;
        border-radius: 5px;
        margin-right: 5px;
        margin-left:-1px;
        height: auto;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    `;
    const optionStyle = css`
        background-color: transparent;
        color: black;
        border: solid black 1px;
        border-radius: 5px;
        padding:3px;
        margin:-3px;
        position: relative;
        :hover {
            background-color: red;
            cursor: pointer;
        }
    `;
    if(visible){
    return <div id={props.id} css={pickerStyle}>
        {options.map((o:PickerOption,key:any)=>{
            return <div id={id+'-'+key}>{o.display}</div>
})}
        {/* {props.options.map((option:any, key:number)=>{
            return <div css={optionStyle} key={key}>{option}</div>
        })} */}
    </div>;

}
else{
    return <></>;
}}

export default SelectPicker;
SelectPicker.defaultProps = {
    options:[
    <div>option 1</div>,
    <div>option 2</div>,
    // <DateInput id={'blah'} onChange={undefined} value={undefined}/>,
    <div>option 4</div>
],
selected:null,
};