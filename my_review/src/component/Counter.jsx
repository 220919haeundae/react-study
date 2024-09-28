import { useRef, useState } from "react";
import styled from 'styled-components';

const TextArea = styled.textarea `
    width : 500px;
    height: 300px;
    resize: none;
`




export default function Counter() {

    const [text, setText] = useState('');

    const counter = (e) => {
        const value = e.target.value;
        setText(value);
        
    }

    const taRef = useRef();

    const resetPage = () => {
        setText('')
        taRef.current.focus();
    }

    return (
        <>
            
            <TextArea type="text" onChange={counter} ref={taRef}/>
            <hr />
            <p>공백 포함 {text.length}자</p>
            <p>공백 제외 {text.replaceAll(' ', '').length}자</p>
            <hr/>
            <button onClick={resetPage}>초기화</button>
        </>
    );
}