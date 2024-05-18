/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { switchOff, switchOn, toggleContainerOn, toggleContainerOff } from './styles';
import { ReactEventHandler } from 'react';

export interface ToggleInputProps {
    id: string;
    value: boolean;
    onClick: ReactEventHandler;
}
const ToggleInput = (props: ToggleInputProps) => {
    const { id, value, onClick } = props;
    const toggleStyle = css`
${value === true ? switchOn : switchOff};
`;
    return (
        <div css={value === true ? toggleContainerOn : toggleContainerOff} id={'container-' + id} onClick={onClick}>
            <div id={'toggle-' + id} css={toggleStyle}>
                <input aria-checked={value} id={id} type='checkbox' css={css({ visibility: 'hidden' })}></input>
            </div>
        </div>
    );
};

export default ToggleInput;
ToggleInput.defaultProps = {
};