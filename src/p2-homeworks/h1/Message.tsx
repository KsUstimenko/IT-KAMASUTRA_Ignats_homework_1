import React from 'react'
import {inspect} from "util";
import avatar from "./ltEB2Z2-YO4.jpg"


type allMessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: allMessageType) {
    const stylesForBackground = {
        backgroundColor: "Chartreuse",
        width: "100%",
        height: "200px",
        position: "absolute"
    }

    const stylesForAllMessage = {
        display: "block",
        backgroundColor: "green",
        width: "550px",
        height: "120px",
        position: "relative",
        bottom: "60px",
        marginLeft: "25%",
        borderRadius: "10px"
    }

    const stylesForAvatar = {
        position: "relative",
        borderRadius: "50%",
        height: "90px",
        width: "90px",
        marginLeft: "50px",
        top: "60px",
    }

    const stylesForName = {
        color: "violet",
        marginLeft: "5%",
        paddingTop: "10px"
    }

    const stylesForMessage = {
        color: "white",
        marginTop: "10px",
        marginLeft: "5%",
        paddingTop: "10px"
    }
    const stylesForTime = {
        color: "Chartreuse",
        marginLeft: "90%",
        paddingTop: "10px"
    }
    return (
        <div>
            <div style={stylesForBackground}></div>
            <img src={avatar} style={stylesForAvatar}></img>
            <div style={stylesForAllMessage}>
            <div style={stylesForName}>{props.name}</div>
            <div style={stylesForMessage}>{props.message}</div>
            <div style={stylesForTime}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message;