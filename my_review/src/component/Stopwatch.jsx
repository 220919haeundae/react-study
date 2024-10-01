import { useEffect, useState } from "react";

export default function Stopwatch() {

    const [time, setTime] = useState(0);
    const [running, isRunning] = useState(false);
    
    useEffect(() => {
        let timer;
        if(running) {
            timer = setInterval(() => {
                setTime(time => time + 1);
            }, 1 * 1000)
        }

        return () => { // 두번쨰 요소가 언마운트 될 때 실행됨
            
            clearInterval(timer);
        }

    }, [running])
    

    return (
        <>
            <h2>Stopwatch</h2>
            <h3>{parseInt(time/60)} : {time%60}</h3>
            <button onClick={() => {isRunning(true);}}>Start</button>
            <button onClick={() => {isRunning(false)}}>Stop</button>
            <button onClick={() => {isRunning(false); setTime(0);}}>Reset</button>
            
        </>
    )
}