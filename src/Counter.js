import React from 'react';
import {connect} from 'react-redux'
import actions from './store/actions';

class Counter extends React.Component{
    render(){
        return <div>
            <button onClick={()=>{this.props.add(10)}}>+</button>
            {this.props.n}
            <button onClick={()=>{this.props.minus(10)}}>-</button>
        </div>
    }
} 
export default connect(state=>({n:state.number}),actions)(Counter)