import Title from '../components/Title';
import { Component } from 'react';
import CommentList from "../components/classComponent/CommentList";

class MyComponent extends Component {
    render() {
        return (
            <>
                <Title value="My Component"/>
                <CommentList/>
            </>
        )
    }
}

function ClassComp() {
    return (
        <div>
            <Title value="Class Component"/>
            <MyComponent/>
        </div>
    )
}
export default ClassComp;