
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

<<<<<<< HEAD
// export default function TodoList({list, setList}) {
    
//     const [isCompleted, setIsCompleted] = useState([]);

//     function completeTodo(key) {
//         const newIsCompleted = [...isCompleted];
//         newIsCompleted[key] = !newIsCompleted[key];
//         setIsCompleted(newIsCompleted);

//     }

//     function deleteTodo(index) {
//         setList(list.filter(function(element, idx) { return idx !== index}));
//         setIsCompleted(isCompleted.filter(function(element, idx) { return idx !== index}))
//     }
    
//     return (

//         <ListContainer>
            
//             {
//                 list.map((todo, index) => 
//                     <TodoItem key={'todo'+index} setIsCompleted={() => setIsCompleted({key: false})} style={{textDecoration : isCompleted[index] ? 'line-through' : 'none'}} onClick={() =>completeTodo(index)}>
//                         {todo}
//                         <button onClick={(e) => { e.stopPropagation(); deleteTodo(index); }} style={{textDecoration: 'none'}}>
//                             X
//                         </button>
//                     </TodoItem>
//                 )
//             }
            
//         </ListContainer>
//     );
// }
export default function TodoList({list, setList}) {

    function deleteTodo(index) {
        setList(list.filter(function(element, idx) { return idx !== index}));
    }
    
    function completeTodo(index) {
        const newList = [...list];
        newList[index].complete = !newList[index].complete;
        setList(newList);
=======
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
>>>>>>> e980508e91eef805b9ffa3d8e63beccfecd0174f
    }

    return (
        <ListContainer>
            {
                list.map((todo, index) => 
<<<<<<< HEAD
                    <TodoItem key={'todo'+index} style ={{textDecoration: todo.complete ? 'line-through' : 'none'}} onClick={() => completeTodo(index)}>
                        {todo.item}
                        <button onClick={(e) => { e.stopPropagation(); deleteTodo(index); }}>
                            X
                        </button>
                    </TodoItem>
=======
                    <TodoItem key={'todo'+index} onClick={completeTodo} ref={todoRef}>{todo}<button onClick={() => deleteTodo(index)}>X</button></TodoItem>
>>>>>>> e980508e91eef805b9ffa3d8e63beccfecd0174f
                )
            }
        </ListContainer>
    );
}