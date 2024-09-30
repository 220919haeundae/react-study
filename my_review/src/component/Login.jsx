import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../App";

export default function Login() {

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const userCtx = useContext(UserContext);

    const handlerLogin= () => {
        userCtx.setData({id: id, pwd: pwd});
    }

    return (
        <div>
            <input type="text" value={id} onChange={(e) => {
                setId(e.target.value);
            }}/>
            <br/>
            <input type="password" value={pwd} onChange={
                (e) => {setPwd(e.target.value)}
            }/>
            <br/>
            <input type="button" value="로그인" onClick={handlerLogin} />
        </div>
    )
}