/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { toggleStyle} from './styles';
import { ReactEventHandler } from 'react';

export interface ToggleInputProps {
    id: string;
    value: boolean;
    onClick: ReactEventHandler;
    height:number|string;
    width:number|string;
    borderSize:number|string;
}
const ToggleInput = (props: ToggleInputProps) => {
    const { id, value, onClick,height,borderSize,width } = props;
    const {toggleContainerOn,toggleContainerOff,switchOn,switchOff} = toggleStyle(parseInt(height.toString()),parseInt(borderSize.toString()),parseInt(width.toString()));
    const style = css`
${value === true ? switchOn : switchOff};
`;
    return (
        <div css={value === true ? toggleContainerOn : toggleContainerOff} id={'container-' + id} onClick={onClick}>
            <div id={'toggle-' + id} css={style}>
                <input aria-checked={value} id={id} type='checkbox' css={css({ visibility: 'hidden' })}></input>
            </div>
        </div>
    );
};

export default ToggleInput;
ToggleInput.defaultProps = {
    width:2,
    height:22,
    borderSize:1
};