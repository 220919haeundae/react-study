import {Link} from 'react-router-dom';
import styled from 'styled-components';

// styled(컴포넌트명)
const MyLink = styled(Link)`
    background-color: teal;
    color : #eee;
    margin: 10px;
    padding: 10px;
    text-decoration: none;
    border-radius: 5px;

    &:hover {
        color: teal;
        background-color: #eee;
    }

`

const navStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}

function Menubar() {
    return (
        <nav style={navStyle}>
          <MyLink to ="/">Home</MyLink>

          <MyLink to ="/cc">Class Component</MyLink>
          <MyLink to ="/fc">Functional Component</MyLink>

          <MyLink to ="/us">useState</MyLink>
          <MyLink to ="/ue">useEffect</MyLink>
          <MyLink to ="/ur">useRef</MyLink>
          <MyLink to ="/uc">UseContext</MyLink>
          <MyLink to ="/um">UseMemo</MyLink>
          <MyLink to ="/ucb">UseCallback</MyLink>
        </nav>
    )
}

export default Menubar;