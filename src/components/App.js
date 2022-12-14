import React from 'react';
import {connect} from 'react-redux'
import { testAction } from "../redux/actions/";

function App(props) {
    const {testAction} = props;
    return (
        <div>
            <button className='btn btn-primary' onClick={testAction}>do that</button>
            {props.testReducer}
        </div>
    );
}

const mapStateToProps = ({testReducer}) => {
    return {testReducer}
}

export default connect(mapStateToProps , {testAction})(App);
