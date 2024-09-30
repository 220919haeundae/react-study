import { useContext, useEffect } from "react";
import Login from "./Login";
import { UserContext } from "../App";


export default function Home() {
    const userCtx = useContext(UserContext);
    const user = userCtx.data;

    useEffect(function() {
        console.log(user);
    }, [user])

    return (
        <>
            {
                user.id === '' ?
                <Login/>
                :
                <div>
                <p> {user.id}님 반값습니다^^</p>
                <br/>
                <input type="button" value="로그아웃" onClick={() => userCtx.setData({id: '', pwd: ''})}/> 
                </div>
            }
            
        </>
    );
}