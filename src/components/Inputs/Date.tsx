/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export interface DateInputProps {
    id: string;
    value:any;
    onChange:any;
}
const DateInput = (props: DateInputProps) => {
    const inputStyle = css`
        // width:props.type=='color'?'calc(100% + 10px)':'100%',
        width: calc(100% - 10px);
        /* width: calc(100% - 10px); */
        color: black;
        border: none;
        padding:0 0 0 5px  !important;
        background: transparent;
        outline: none;
        height:22px;
        `;
    return(
        <>
    <div css={css({
        left: '0px',
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
        padding: '3px',
        textShadow: '2px 2px 5px #be7900',
    })}>
        <FontAwesomeIcon id={props.id + '-icon'} icon={solid('calendar')}
            css={css(
                {
                    stroke: '#000000',
                    strokeWidth: '10px',
                    strokeDasharray: '2,2',
                    strokeLinejoin: 'round',
                    padding: '0 0 0 5px'
                }
            )}
            onClick={async (e:any) => {
                const inputElement:any = document.getElementById(props.id);
                 inputElement?.showPicker();
            }}
        />
    </div>
        <input css={inputStyle} type='date' id={props.id} value={props.value} 
            placeholder='yyyy-mm-dd'
            onChange={(e:any)=>{
            // console.log('date changed -- e',e);
            props.onChange(e.target.value);
        }}/></>
    );
};

export default DateInput;
DateInput.defaultProps = {
};