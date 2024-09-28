import { useEffect, useState } from "react";

function CurrentTime() {
    const [currTime, setCurrTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(()=> {
            setCurrTime(new Date);
        }, 1*1000);

        return () => clearInterval(timer);
    }, [currTime])

    const day = currTime.toLocaleTimeString('ko-KR');

    return (
        

            <div>
                {day}
            </div>
        
        
    );
}

export default CurrentTime;