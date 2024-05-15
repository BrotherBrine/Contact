/** @jsxImportSource @emotion/react */
// import React, {useContext} from 'react';
// import {css} from '@emotion/react';
import { Else, If,Then } from 'react-if';
import { FontAwesomeIcon,FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { brands, regular, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { IconName } from '@fortawesome/fontawesome-common-types';


// <FontAwesomeIcon icon={icon({name:'user'})} />
// <FontAwesomeIcon icon={brands('facebook-square')} />
// import { ActiveTheme } from '../context';
export interface IconProps {
    id: string;
    iconType:string;
    iconName: IconName;
}

const Icon = (props: IconProps) => {
// const {theme,setTheme} = useContext(ActiveTheme);
console.log('props',props);
    return(

        
        <div id={props.id+'-icon'} >
        <If condition={props.iconType.toLowerCase()=='regular'}>
            <Then>
                <FontAwesomeIcon icon={regular(props.iconName)} />
            </Then>
            </If>
            <If condition={props.iconType.toLowerCase()=='brands'}>
            <Then>
                <FontAwesomeIcon icon={brands(props.iconName)} />
            </Then> 
        </If>
        </div>
    );
};

export default Icon;
Icon.defaultProps = {
    provider:'regular'
};