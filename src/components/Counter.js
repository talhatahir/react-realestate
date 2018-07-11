import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions';


const Counter =(props) => (
    <div>
        <h1>I am a counter </h1>   
        <p> Count : {props.count}</p>
        <button onClick={props.onIncrement}>Increment</button>
        <button onClick={props.onDecrement}>Decrement</button>
        <button onClick={props.onAddValue}>Add +5</button>

        
    </div>
)

const mapStateToProps= (state)=>{
    console.log('mapStateToProps',state);
    return{
        count:state.count
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement : () => {
            const action = {type : actionTypes.INCREMENT};
            dispatch(action);
        },
        onDecrement : () => {
            const action = {type : actionTypes.DECREMENT};
            dispatch(action);
        },
        onAddValue : () => {
            const action = {type : actionTypes.ADDVALUE, val:10};
            dispatch(action);
        }
    }


}
  
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
  