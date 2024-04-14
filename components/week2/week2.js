import React from "react";
import ComponentWithoutJSX from "./componentwithoutjsx";
import ComponentWithJSX from "./componentwithjsx";
import MyFunctionComponent from "./MyFunctionComponent";
import MyClassComponent from "./MyClassComponent";
function Week2(){
    return(
        <div style={{textAlign:"center"}}>
            <h1>Week-2</h1>
            <hr/>
            <ComponentWithoutJSX/>
            <hr></hr>
            <ComponentWithJSX/>
            <hr></hr>
            <MyFunctionComponent/>
            <hr></hr>
            <MyClassComponent/>
        </div>
    );
}
export default Week2;