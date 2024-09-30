import { useState } from "react";
import { test5 } from "../services/testApi";

export const Practice2 = () => {

    const [list, setList] = useState([{name: '홍길동', age: '28', job: '도둑'}])

    const testClick = async() => {
        console.log((await test5()).data.msg);
        const data = (await test5()).data.msg;
        

        
        for(let i = 0; i < data.length; i++) {
            for(let j = 0; j <list.length; j++) {
                if(data[i].name !== list[j].name) {
                    list.push(data[i]);
                }
            }
        }
        setList([...list]);
        
        
        
    }

    return (
        <>
            <button onClick={testClick}>테스트</button>
            <table>
                    <tr>
                        <td>이름</td>
                        <td>나이</td>
                        <td>직업</td>
                    </tr>
                    {
                        list.map((item) => {
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.job}</td>
                                </tr>
                            )
                        })
                    }
            </table>
        </>
    )
}