import React from "react";
import "./cityselection.less";
import Header from "../header/Header";
import {connect} from "react-redux";
import actions from "../../store/actions/city";
@connect(state=>({...state.city}),actions)
export default class CitySelection extends React.Component{
    componentDidMount(){
        this.props.getCityAPI();
    }
    render(){
        return (
            <div>

                <div className="list">
                    <ul>
                        {this.props.list.map((item,index)=> {
                            let {name,id}=item;
                            return (
                                <li key={index}
                                    onClick={(id)=>{this.props.getCityAPI(id)}}>{name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}