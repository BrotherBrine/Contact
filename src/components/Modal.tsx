/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { If, Then } from 'react-if';
export interface ModalProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
    id: string;
    isShowing: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dismissModal: any;
}
const Modal = (props: ModalProps) => {


    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        if (props.isShowing) {
            console.log('modal props', props);
            console.log('ref.current', ref.current);
        }
    }, []);
    return (
        <If condition={props.isShowing}>
            <Then>
                <div id={props.id + '-overlay'} css={css({
                    position: 'absolute', left: '0px', 
                    top: '0px', height: '100%', 
                    width: '100%', 
                    backgroundColor: '#00000000', 
                    '& :hover': { 
                        cursor: 'auto' 
                    }
                })} onClick={props.dismissModal}>
                </div>
                <div id={props.id} css={css({ 
                    position: 'fixed', 
                    left: '50%', 
                    border: 'solid black 1px', 
                    backgroundColor: 'white' 
                    })}>
                    {props.children}
                </div>
            </Then>
        </If>
    );
};

export default Modal;
Modal.defaultProps = {
    isShowing: false,
};