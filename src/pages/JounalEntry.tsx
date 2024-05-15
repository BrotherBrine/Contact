/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { If, Then } from 'react-if';
import Input from '../components/Inputs/Input';
export interface JournalEntryProps {
    id: string;
}

const JournalEntry = (props: JournalEntryProps) => {
  
    const [text, setText] = useState('');
    useEffect(()=>{


    },[]);
    return (
        <div css={css({width:'100%',padding:'10px'})}>
            <Input type='textarea' id={props.id} value={text} onChange={setText} minHeight={50}/>
            <Input type='button' id='saveJournal' value='Save' onClick={()=>{alert('save');}}/>
        </div>
    );
};

export default JournalEntry;
JournalEntry.defaultProps = {
};