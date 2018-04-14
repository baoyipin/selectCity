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
                <Link  to="/city" className="goChoose"  onClick={()=>{this.handleClick()}}>
                    <div>所在城市</div>
                    <div>{this.props.city?this.props.city:"选择"}</div>
                </Link>
            </div>
        )
    }
}