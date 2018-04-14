import * as Types from "../action-types";
let initState={
    city:"",
    listType:"provience",
    list:[]
};
export default function (state=initState,action) {
    switch (action.type){
        case Types.SET_LOCATION_LIST:
            return {...state,list:action.list};
        case Types.SET_LIST_TYPE:
            return {...state,listType:action.listType};
        case Types.RESET_INFO:
            return {...state,listType:"provience",list:action.list};
        case Types.SET_CITY:
            return {...state,city:action.city}
    }
    return state;
}