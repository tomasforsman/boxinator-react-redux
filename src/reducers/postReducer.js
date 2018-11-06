import { FETCH_POSTS, NEW_POST, NEW_SHIPMENT, FETCH_SHIPMENT } from './../actions/types';

const initialState = {

    shipmentinfo: [],
    items: [],
    item: {},
    shipment: 0

}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_SHIPMENT:
            return {
                ...state,
                shipmentinfo:action.payload
            };
        case FETCH_POSTS:
        return{
            ...state,
            items:action.payload
        };
        case NEW_POST:
        return{
            ...state,
            items:action.payload
        };
        case NEW_SHIPMENT:
        return {
            ...state,
            shipment:action.payload
        };


        default:
        return state;
    }
}
