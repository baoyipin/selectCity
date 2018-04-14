import React from "react";
import "./header.less";
import {withRouter} from "react-router-dom";
class Header extends React.Component{
    render(){
        return (
            <div className="header">
               <i className="iconfont icon-fanhui" onClick={()=>{
                   this.props.history.goBack();}}></i>
                <span className="title">{this.props.children}</span>
            </div>
        )
    }
}
export default withRouter(Header)