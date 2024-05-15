/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { timeString } from '../utilities';
import Time from '../components/Time';
export interface ClockProps {
    id: string;
}

const Clock = (props: ClockProps) => {
    const [time, setTime] = useState('');

    const font = css`
        /* @font-face {
            font-family: 'Arcade';
  src: local('Arcade'), url(../assets/arcade_ya/ARCADE_I.TTF) format('truetype');
        } */
    `;
    console.log(props);

    const handleKeystroke = (e: KeyboardEvent) => {
        console.log('e', e);
        if (e.altKey && e.key=='9')
        {
            e.preventDefault();
            document.fullscreenElement? document.exitFullscreen() : document.documentElement.requestFullscreen();
        }
    }
    const clockDoubleClickHandler = (e:MouseEvent) =>{
        e.preventDefault();
        document.fullscreenElement? document.exitFullscreen() : document.documentElement.requestFullscreen();
    }

    useEffect(() => {
        console.log('document.fullscreenElement',document.fullscreenElement);
        const interval = setInterval(() => {
            setTime(timeString());
        }, 1000);

        document.addEventListener('keyup', handleKeystroke);
        const clock = document.getElementById('clockWrapper');
        clock?.addEventListener('dblclick',clockDoubleClickHandler);

        return () => {
            clearInterval(interval);
            document.removeEventListener('keyup', handleKeystroke);
            clock?.addEventListener('dblclick',clockDoubleClickHandler);
        }
    }, []);



    const flex = css`
        display:flex;
        flex-direction: column;
        height:100%;
        width:100%;
        justify-content: center;
        align-items: center;
        align-self: center;
        align-content: center;
        justify-self: center;
    `;

    return (
        <div id='clockWrapper' css={font && flex}>
            <Time id='clock' time={time} />
        </div>
    );

};

export default Clock;
Clock.defaultProps = {
};