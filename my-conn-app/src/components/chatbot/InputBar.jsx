import styled from 'styled-components'

const Container = styled.div`
    width: 95%;
    border: 1px dotted pink;
    padding: 15px;
    border-radius: 10px;
    height: 50px;
    margin: 0 auto;
    position: relative;
`
const MyInput = styled.textarea`
    border:none;
    outline: none;
    width: 100%;
    height: 100%;
    resize: none;
`

const InputBar= ({message, changeMessage, sendMessage}) => {

    const showMessage = (e) => {
        if(e.key=="Enter") {
            console.log(e);
            sendMessage(e.target.value)
            changeMessage("");
        }
        if(e.shiftKey && (e.keyCode == 13)) {
            console.log('동시입력 성공');
            changeMessage(message + '\n');
        }
    }

    return (
        <Container>
            <MyInput type="text" value = {message} onChange={(e) => changeMessage(e.target.value)} 
            onKeyDown={(e) => {showMessage(e)}}/>
        </Container>
    )
}

export default InputBar