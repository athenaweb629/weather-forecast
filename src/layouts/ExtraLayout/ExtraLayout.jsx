import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

function ExtraLayout (){
    return (
        <Fragment>
            404
            <Outlet />
        </Fragment>
    )
}

export default ExtraLayout;