import React from "react";
import "./profile.less";
import Header from "../header/Header";
//import {Icon} from "antd";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import actions from "../../store/actions/city";
@connect(state=>({...state.city}),actions)
export default class Profile extends React.Component{
    handleClick(){
        this.props.resetAPI();
    }
    componentDidMount(){

    }
    render(){
        return (
            <div>
                <Header>个人中心</Header>
                <div className="goChoose">
                    <div>所在城市</div>
                    <Link to="/city" onClick={()=>{this.handleClick()}}>{this.props.city?this.props.city:"选择"}</Link>
                </div>
            </div>
        )
    }
}