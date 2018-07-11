import React from 'react';
import {connect} from 'react-redux';

const Counter =(props) => (
    <div>
        <h1>I am a counter </h1>   
        <p> Count : {props.count}</p>
        <button onClick={props.onIncrement}>Increment</button>
        <button onClick={props.onDecrement}>Decrement</button>

        
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
            const action = {type : 'INCREMENT'};
            dispatch(action);
        },
        onDecrement : () => {
            const action = {type : 'DECREMENT'};
            dispatch(action);
        }
    }


}
  
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
  