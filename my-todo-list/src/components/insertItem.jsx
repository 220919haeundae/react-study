import { useState } from "react";

import { IoAddCircleOutline } from "react-icons/io5";
import styled from "styled-components";

const InsertInput = styled.input`
    border: none;
    border-radius: 50px 0px 0px 50px;
    background-color: #b8e6bf;
    height: 40px;
    min-width: 250px;
`

const InsertBtn = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    cursor:pointer;
    border-radius: 0px 50px 50px 0px;
    background-color: #68de7c;
    color: white;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const InsertContainer = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: center;
`

// function InsertItem() {}
const InsertItem = (props) => {
    const [todoItem, setTodoItem] = useState('');
    const addTodo = () => {
        props.addItem({item: todoItem, complete: false});
        setTodoItem('');
    }

    return (
    <InsertContainer>
        <InsertInput value={todoItem} placeholder="할일 입력" onChange={(e) => {setTodoItem(e.target.value);}}></InsertInput>
        <InsertBtn onClick={addTodo}>
            <IoAddCircleOutline />
        </InsertBtn>
    </InsertContainer>
    );
}

export default InsertItem;