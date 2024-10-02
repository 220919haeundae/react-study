import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { FooterText, Header, Logo, Main, MainContainer } from './components/StyledComponents';

import './App.css';
import './css/fonts.css'
import Menubar from './components/Menubar';
import MainPage from './pages/MainPage';


function App() {
  return (
    <BrowserRouter>
    <MainContainer>
    <Header>
      {/* 로고 | 메뉴 | 마이페이지 */}
      <Logo>YOFLIX</Logo>
      
        <Menubar/>
      
      MyPage
    </Header>
    
    <Main>
      
      {/* 메인 컨텐츠 영역 */}
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>


    </Main>
    
    <footer>
      {/* 회사 정보 | 연락처 ... */}
      <h3>요플릭스 대한민국</h3>
      <FooterText>요플릭스 코리아 XX</FooterText>
      <FooterText>대표: 이요셉</FooterText>
      <FooterText>이메일 주소 : twwt0912@gmail.com</FooterText>
      <FooterText>주소 : 서울 강남구 테헤란로 10길 9</FooterText>
    </footer>
    </MainContainer>
    </BrowserRouter>
  );
}

export default App;
