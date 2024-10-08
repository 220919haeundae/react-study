import { useContext } from "react"
import Title from "../../../components/Title"
import { createContext } from "react";
import ResultArea from "./ResultArea";
import { useState } from "react";

export const ResultContext = createContext();

export default function UseContextHook() {
    const [hobby, setHobby] = useState('');
    const [result, setResult] = useState('');

    return(
        <>
            {/* 전체를 생성한 Context명.Provider로 감싸준다. */}
            <ResultContext.Provider value={result}>
                <Title value="useContext"/>
                

                <input type="text" placeholder="취미를 입력하세요" vlaue = {hobby} onChange={(e) => {setHobby(e.target.value)}}/>
                <button onClick={() => {
                    setResult(`취미는 ${hobby}입니다.`)
                }}>결과보기</button>

                <ResultArea data="샘플"/>
            </ResultContext.Provider>
            
        </>
    )
}