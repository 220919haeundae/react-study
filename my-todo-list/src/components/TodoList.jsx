
import { useRef } from "react";
import styled from "styled-components";

const ListContainer = styled.ul`
    width: 100%;
    margin: 12px 0px;
    padding: 0px 30px;
`

const TodoItem = styled.li`
    height: 30px; 
    background-color: #b8e6bf;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function TodoList({list, setList}) {

    function deleteTodo(idx) {
        setList(list.filter(function(element, index) {
            return index !== idx;
        }))
    }
    
    const todoRef = useRef(null);

    function completeTodo() {
        
        const origin = todoRef.current.innerText;
        const change = origin + '(완료)';
        todoRef.current.innerHtml += change;
    }

    return (
        <ListContainer>
            {
                list.map((todo, index) => 
                    <TodoItem key={'todo'+index} onClick={completeTodo} ref={todoRef}>{todo}<button onClick={() => deleteTodo(index)}>X</button></TodoItem>
                )
            }
        </ListContainer>
    );
}
