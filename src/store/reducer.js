import * as actionTypes from './actions';

const initialState ={
    listings : [],
    hasFetched: false 
};

const reducer = (state= initialState ,action) =>{

    switch(action.type){
        case actionTypes.RESOLVED_GET_LISTINGS:
            return Object.assign({},state, {listings : action.data, hasFetched: action.fetchFlag });
        
        case actionTypes.GET_LISTING_DETAIL:
            return Object.assign({},state, {listingsDetails : action.data });
        
        default:
            return state;
    }
}


export default reducer;