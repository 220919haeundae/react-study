import { useEffect, useState } from "react";

function CurrentTime() {
    const [currTime, setCurrTime] = useState(new Date());

      const formatTime = currTime.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      useEffect(() => {
        setInterval(setCurrTime(new Date()), 1000)
      }, [])

    return (
        <div>
            <p>{formatTime}</p>
        </div>
        
    );
}

export default CurrentTime;