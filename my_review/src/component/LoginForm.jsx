import { useState } from "react";

const liStyle= {
    width: "50%",
     boxSizing: "border-box"
}

function LoginForm(props) {
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');

    const ChangeId = (e) => {      
        console.log(e.target.value);  
        setUserId(e.target.value);
    }

    const ChangePwd = (e) => {      
        console.log(e.target.value);  
        setUserPwd(e.target.value);
    }

    return (
    
        <ul style={{listStyle: "none"}}>
            <li><input value = {userId} onChange={(e) => {ChangeId(e)}} type="text" name="userId" id="userId" style={liStyle}placeholder="아이디"/></li>
            <li><input value = {userPwd} onChange={(e) => {ChangePwd(e)}} type="password" name="userPwd" id="userPwd" style={liStyle} placeholder="비밀번호"/></li>
            <li><button type="submit" style={liStyle} onClick={props.TransferTo(document.getElementById("userId").value, document.getElementById("userPwd").value)}>로그인</button></li>
        </ul>
        
    );
}
export default LoginForm;