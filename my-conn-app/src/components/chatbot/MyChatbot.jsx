import styled from 'styled-components';
import InputBar from './InputBar';
import { useState } from 'react';
import ChatList from './ChatList';
import { chatGo } from '../../services/myGpt';

const Title = styled.h2`
    border-bottom: 1px sollid #222;
    padding: 10px;
    text-shadow: 1px 1px 5px;
`
// vh는 뷰포트 기준으로 비율을 정함
const Contatiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    max-width: 720px;
    margin: 0 auto;
`

const Main = styled.main`
    flex: 1;
    overflow-y: scroll;
    &:: -webkit-scrollbar {
    display: none;

    }
`

const FooterText = styled.span`
    font-size: 12px;
    color: teal;
    text-align: center;
`

const MyChatbot = () => {
    const [message, setMessage] = useState(''); //  내가 보낼 메세지
    const [chatList, setChatList] = useState([]); // 주고받은 메시지 리스트
    const [loading, isLoading] = useState(false); // 메시지 전송 유무
    

    const ChangeMessage = (a) => {
        setMessage(a);
    }

    const sendMessage = async () => {
        //alert(message);
        const data = {
            data: new Date(),
            message: message
        }

        // 입력된 내용으로 메시지 전송 후 결과 받기
        
        try {
            isLoading(true);
            const result = await chatGo({message: message});
            data.response =  result;// 답변 내용을 data 변수에 추가

            setChatList([...chatList, data]); // 이전에 저장되어 있던 chatList 상태값
        } catch(e) {
            console.log(e);
        } finally {
            isLoading(false);
        }
        
    }

    return (
        <>
        <Contatiner>
            <header>
                <Title>My Chatbot</Title>
            </header>
            <Main>
                <ChatList chatList={chatList} loading={loading}/>
            </Main>
            <InputBar message={message} changeMessage={ChangeMessage} sendMessage={sendMessage}/>
            <footer>
                <FooterText>나의 챗봇은 실수할 수 있습니다. 너그러이 이해해주세요^^.</FooterText>
            </footer>
        </Contatiner>
        </>
    )
}
export default MyChatbot;