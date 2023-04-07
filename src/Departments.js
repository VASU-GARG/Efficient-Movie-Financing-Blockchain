import { useState } from "react";
import { Link } from "react-router-dom";
import './Department.css';
import SendToDeptHeadForm from "./SendToDeptHeadForm";
import { useLocation } from "react-router-dom";

const Dept = ({deptName, deptHead, deptAccount}) => {
  const location = useLocation();
  return (
    <div className="card">
        <h2>{deptHead}</h2>   
        <h2 style={{color:'blue', textDecoration:'underline'}}>{deptName} Department</h2>
      <br></br>
        <div className="allLinks">
        <button style={{width:'100px', height:'70px', backgroundColor:'lightblue'}}>
          <Link
            to={"/SendToDeptHeadForm"}
            state={{ name:deptName, head:deptHead, account:deptAccount }}
          >
            <p className="move-card-message">Send Money</p>
          </Link>
        </button>
        <button style={{width:'100px', height:'70px', backgroundColor:'lightblue'}}>
        <Link
          to={"/seeDeptTransactions"}
          state={{ deptName:deptName, deptHead:deptHead, deptAccount:deptAccount }}
        >
          <p className="move-card-message">See Transactions</p>
        </Link>  
        </button>

        <button style={{width:'100px', height:'70px', backgroundColor:'lightblue'}}>
        <Link
          to={"/ViewPaymentRequest"}
          state={{ deptName:deptName, deptHead:deptHead, deptAccount:deptAccount }}
        >
          <p className="move-card-message">Payment Request</p>
        </Link>  
        </button>
        </div>
    </div>
  );
};

export default Dept;
