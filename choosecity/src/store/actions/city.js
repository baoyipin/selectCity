import * as Types from "../action-types";
//import cityInfo from "../../../resources/mock/cityInfo";
import jsonInfo from "../../../resources/mock/jsonInfo";
export default {
    /*getListAPI(){
        return function (dispach,getState) {
            let {listType}=getState().city;
            if (listType==="provience"){
                let provience=[];
                cityInfo.forEach((item,index)=>{
                    provience.push(item);
                });
               dispach({type:Types.SET_LOCATION_LIST,list:provience})
            }else if (listType==="city"){
                let city=[]
            }
        }

    },*/
    getProvienceAPI(){
       let provience=[];
       for (let key in jsonInfo){
           provience.push({name:jsonInfo[key].name,id:key})
       }
       return {type:Types.SET_LOCATION_LIST,list:provience}
    },
    getCityAPI(index){
        let city=[];
        let provience=jsonInfo[index].child;
        for (let key in provience){
            city.push({name:provience[key].name,id:key});
        }
       return {type:Types.SET_LOCATION_LIST,list:city}
    },
    getAreaApi(index){
        let area=[];
        for (let key1 in jsonInfo){
            for (let key2 in jsonInfo[key1].child){
                if (key2===index){
                    for (let key3 in jsonInfo[key1].child[key2].child){
                        area.push({name:jsonInfo[key1].child[key2].child[key3],id:key3})
                    }
                }
            }
        }
        return {type:Types.SET_LOCATION_LIST,list:area}
    },
    setListTypeAPI(type){
        return {type:Types.SET_LIST_TYPE,listType:type}
    },
    resetAPI(){
        let provience=[];
        for (let key in jsonInfo){
            provience.push({name:jsonInfo[key].name,id:key})
        }
        return {type:Types.RESET_INFO,list:provience}
    },
    setCityAPI(city){
       return {type:Types.SET_CITY,city}
    }
}