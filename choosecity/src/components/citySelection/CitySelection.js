import React from "react";
import "./cityselection.less";
import Header from "../header/Header";
import {connect} from "react-redux";
import actions from "../../store/actions/city";
@connect(state=>({...state.city}),actions)
export default class CitySelection extends React.Component{
    componentDidMount(){
        this.props.getProvienceAPI();
    }
    handleClick(e,id){
        if (this.props.listType==="provience"){
            this.props.getCityAPI(id);
            this.provience.innerHTML=e.target.innerHTML;
            this.provience.className+=" active";
            this.props.setListTypeAPI("city")
        }else if (this.props.listType==="city"){
            let city=e.target.innerHTML;
            this.props.getAreaApi(id);
            //this.city.innerHTML=city;
            this.city.className+=" active";
            this.props.setListTypeAPI("area");
            this.props.setCityAPI(city);
        }else {
            this.area.innerHTML=e.target.innerHTML;
            this.area.className+=" active";
            setTimeout(()=> {
                this.props.history.push("/")
            },500)
        }

    }
    clickProvience(){
        this.props.setListTypeAPI("provience");
        this.props.getProvienceAPI();
        this.props.resetAPI();
        this.props.setCityAPI("城市");
        this.city.className="city";
    }
    render(){
        return (
            <div>
                <Header>所在地</Header>
                <div className="container">
                    <div className="listHeader">
                        <div className="provience" ref={x=>this.provience=x} onClick={()=>{this.clickProvience()}}>省/自治区</div>
                        <div className="city" ref={x=>this.city=x}>{this.props.city?this.props.city:"城市"}</div>
                        <div className="area" ref={x=>this.area=x}>区/县</div>
                    </div>
                    <div className="list">
                        <ul>
                            {this.props.list.map((item,index)=> {
                                let {name,id}=item;
                                return (
                                    <li key={index}
                                        onClick={(e)=>{this.handleClick(e,id)}}>{name}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}