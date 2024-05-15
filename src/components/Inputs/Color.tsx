/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect } from 'react';
import { css } from '@emotion/react';
import { If, Then } from 'react-if';
import { ActiveTheme } from '../context';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deviceType } from 'react-device-detect';
import { useDebounceCallback } from 'usehooks-ts';
import { inputStyle } from './styles';

export interface ColorInputProps {
    onChange(e: any): unknown;
    id: string;
    value: string;
}
const ColorInput = (props: ColorInputProps) => {

    // const inputStyle = css`
    //     // width:props.type=='color'?'calc(100% + 10px)':'100%',
    //     width: calc(100% - 10px);
    //     /* width: calc(100% - 10px); */
    //     color: black;
    //     border: none;
    //     padding:0 0 0 5px  !important;
    //     background: transparent;
    //     outline: none;
    //     height:22px;
    //     `;
    const device: string= deviceType.toString();
    const userAgent: string = window.navigator.userAgent;
    const isIOS:boolean = userAgent.toLowerCase().includes('iphone');
    
    const hexColor = props.value;

    const debounced = useDebounceCallback((e: any) => { props.onChange(e); }, 0);

    const setHexColor = (v: string) => {
        debounced(v);
    };

    return (
        <>
              <input id={props.id} type='color' css={css({ border: 'none', height: '0px !important', width: '0px !important', padding: '0px', zIndex: '-50' })}
                    onChange={(e: any) => {
                        setHexColor(e.target.value);
                        // props.onChange(e);

                    }} value={props.value}
                />
            {/* </Then>
            </If> */}

            <div css={css({
                left: '0px',
                color: `${hexColor}`,
                display: 'flex',
                flexDirection: 'row',
                padding: '3px',
                textShadow: '2px 2px 5px #be7900',
            })}>
                <FontAwesomeIcon id={props.id + '-icon'} icon={solid('swatchbook')}
                    css={css(
                        {
                            stroke: '#000000',
                            strokeWidth: '10px',
                            strokeDasharray: '2,2',
                            strokeLinejoin: 'round',
                            padding: '0 0 0 5px'
                        }
                    )}
                    onClick={async () => {
                        const inputElement = document.getElementById(props.id);
                        await inputElement?.showPicker();
                    }}
                /><If condition={isIOS}>
                    <Then>
                        <input id={props.id} type='color' css={css({position:'relative',left:'-20px', height:'1px', padding:'10px',marginRight:'-25px',display:'hidden', width:'1px',backgroundColor:'transparent'})}
                            onChange={(e: any) => {
                                setHexColor(e.target.value);
                                // props.onChange(e);
                            }}
                        />
                    </Then>
                </If>
            </div>
            <input id={props.id + '-color-value'} 
                placeholder='#000000'
                type='text' value={hexColor} css={inputStyle} maxLength={7} onChange={(e: any) => {
                const colorValue = e.target.value;
            
                const regExp = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
                const isHex = regExp.test(colorValue);
                // if (colorValue && isHex){
                setHexColor(e.target.value);
                // }
                // props.onChange(e);
            }
            } />
        </>
    );
};

export default ColorInput;
ColorInput.defaultProps = {
};