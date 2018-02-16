import {FETCH_WEATHER} from '../actions/index';

export default function(state=[],action){
    //console.log(action.type," = ", FETCH_WEATHER);
    switch(action.type)
    {
        case FETCH_WEATHER:
            //concate creates new instance of array with existing value and new value 
            //return state.concate([action.payload.data]);

            //other ES6 option is
            console.log(action.payload.data);
            return [action.payload.data,...state];
        
    }
    return state;
}