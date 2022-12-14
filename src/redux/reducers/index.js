import {TYPE} from '../types'

export const testReducer = (data = "Test 1" , action) =>{
    switch (action.type){
        case TYPE :
            return action.payload
        default :
            return data;
    }
}
