import { useState } from "react";
import { Link } from "react-router-dom";
import SendToDeptHeadForm from "./SendToDeptHeadForm";
import Dept from "./Departments"
import "./producerHomePage.css"


const Producer = ()=>{

    const departments = [
        {
            deptName : "Costume",
            deptHead : "Bob",
            deptAccount : "0x884a746F2319f9d7cf0d79b2623214F579Dd4A61"
        },
        {
            deptName : "Construction",
            deptHead : "Alice",
            deptAccount : "0xa85650FD05B77dB1cCDF1E31f7280Dfa6ADD60A8"
        },
        {
            deptName : "Equipment",
            deptHead : "Darth",
            deptAccount : "0xD4371eAb5c33f74256dF07ee869525f4A89231AF"
        },

    ]


    return(
        <div className="producerBody">

            <div className="page-head">
                <h2>Departments</h2>
            </div>
            <div className="bucket">
                {departments.map((dept) => (
            <Dept deptName={dept.deptName} deptHead={dept.deptHead} deptAccount={dept.deptAccount} />
                ))}
            </div>
        </div>
    )
}

export default Producer;