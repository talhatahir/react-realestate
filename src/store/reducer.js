import * as actionTypes from './actions';
/* 
const initialState ={
    count : 6
};

const reducer = (state= initialState ,action) =>{

    switch(action.type){
        case actionTypes.INCREMENT:
            return Object.assign({},state, {count : state.count + 1 });
        
        case actionTypes.DECREMENT:
            return Object.assign({},state, {count : state.count - 1 });
        
        case actionTypes.ADDVALUE:
            return Object.assign({},state, {count : state.count + action.val });
        
        default:
            return state;
    }
}
 */


const initialState ={
    listings : [],
    listingsDetails:[]
};

const reducer = (state= initialState ,action) =>{

    switch(action.type){
        case actionTypes.INCREMENT:
            return Object.assign({},state, {count : state.count + 1 });
        
        case actionTypes.DECREMENT:
            return Object.assign({},state, {count : state.count - 1 });
        
        case actionTypes.ADDVALUE:
            return Object.assign({},state, {count : state.count + action.val });
        
        case actionTypes.RESOLVED_GET_LISTINGS:
            return Object.assign({},state, {listings : action.data });
        
        case actionTypes.GET_LISTING_DETAIL:
            return Object.assign({},state, {listingsDetails : action.data });
        
        default:
            return state;
    }
}


export default reducer;