import {useEffect, useState} from 'react';
import Title from '../../components/Title';


/*
    * UseEffect
      : 컴포넌트가 렌더링 될 때 특정 작업을 수행할 수 있도록 해주는 리엑트 훅
        클래스형 컴포넌트의 생명주기 메소드의 역할을 함

      - 컴포넌트가 처음 마운트 되었을 때 ( 처음 렌더링 됐을 때 )
      - 언마운트 되었을 때 (사라질 때)
      - 업데이트 되었을 때 (특정 상태, props가 바뀌었을 때)

    * 사용법
      useEffect(함수, []);
      - 첫번째 인자 (함수) 함수 : 특정 작업을 수행할 내용 작성
      - 두번째 인자 ([]) : 배열 형태 (의존성 배열)
        + 생략된 경우 : 마운트 시점, 업데이트 시점
        + 빈 배열     : 마운트 시점
        + [state]     : state 업데이트 시점
*/
export default function UseEffectHook() {

    const [name, setName] = useState("이요셉");
    const [count, setCount] = useState(0);

    const changeName = (e) => {
        const chName = e.target.value;
        console.log(chName);
        setName(chName);
    }
    
    const increase = () => {
        setCount(count+1);
    }
    
    useEffect(() => {
        // 렌더링 되었을 때, state가 변경될 때마다 실행
        // componentDidMount, componentDidUpdate 의 역할
        console.log("의존성 배열이 없는 useEffect");
    })

    useEffect(()=> {
        //렌더링 되었을 때 한번만 실행 (최초 마운트)
        // componentDidMount의 역할
        console.log("빈 배열을 의존성 배열로 가지는 useEffect")
    }, [])

    useEffect(()=> {
        //렌더링 되었을 때, name이라는 상태(state)가 변경되었을 때마다 실행
        // componentDidMount, componentDidUpdate
        console.log(`{name} :: [name]이라는 의존성 배열을 가지는 useEffect`);
    }, [name])

    useEffect(() => {
        // 사라질 때 실행
        // componentWillUnmount

        return()=> {
            console.log(`${name} :: 을 리턴하는 useEffect`)
        }
    }, [name])


    return (
        <>
            <Title value ="useEffectHook"/>
            <div>
                <p>안녕하세요. {name}입니다.</p>
                <input type="text" onKeyUp = {changeName}/>

                <p>{count}번 클릭</p>
                <button onClick={increase}>+</button>
            </div>
        </>
    );
}

