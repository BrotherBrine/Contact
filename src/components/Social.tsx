/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { If, Then } from 'react-if';
import QRCode from 'react-qr-code';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Modal from './Modal';
// import { ActiveTheme } from '../context';
export interface SocialProps {
    id: string;
    url: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
    openInNewTab: boolean;
}
const Social = (props: SocialProps) => {
    // const {theme,setTheme} = useContext(ActiveTheme);
    const [modalShowing, setModalShowing] = useState(false);
    return (
        <>
            <div css={css({
                display: 'flex', alignItems: 'stretch', alignContent: 'space-between', width: 'calc(100% - 10px)', backgroundColor: 'green',
                padding: '5px',
                border: 'solid black 1px',
                borderRadius:'5px',
                margin:'5px 0'
            })}>
                <a css={
                    css({
                        borderRadius: '5px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'stretch',
                        alignContent: 'space-around',
                        width: '100%'
                    })} href={props.url}
                    target={props.openInNewTab ? '_blank' : '_self'}>
                    <div>{props.children}</div>
                    <div>{props.label}</div>
                </a>
                <div css={css({
                    width: '5%', paddingRight: '100px', alignSelf: 'end', flexShrink: '50', '& :hover': {
                        cursor: 'pointer'
                    }
                })}>
                    <div onClick={() => setModalShowing(!modalShowing)} >
                        <FontAwesomeIcon id={props.id + '-social-ellipsis-vertical'} icon={solid('ellipsis-vertical')} />
                    </div>
                    <Modal id={props.id + '-modal'} isShowing={modalShowing} dismissModal={() => setModalShowing(false)}>
                        <div css={css({ color: 'black' })}>SocialModal Content - {props.label}</div>
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default Social;
Social.defaultProps = {
    openInNewTab: true
};