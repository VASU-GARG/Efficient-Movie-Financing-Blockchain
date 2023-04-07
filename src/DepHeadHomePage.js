import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SendToDeptHeadForm from "./SendToDeptHeadForm";
import Dept from "./Departments"
import "./producerHomePage.css"
import Web3 from 'web3';
import MakePayment from "./MakePayment"

const DeptHead = ()=>{
    
    const [account, setAccount] = useState("0x884a746F2319f9d7cf0d79b2623214F579Dd4A61");
    const [dept, setDept] = useState("Costume");
    const [balance, setBalance] = useState("");



    useEffect(() => {
        async function fetchBalance() {

        const web3 = new Web3('http://localhost:7545');
          const balance = await web3.eth.getBalance(account);
          setBalance(web3.utils.fromWei(balance, 'ether'));
        }
        fetchBalance();
      }, [account]);
    return(
        <div className="producerBody">
            <div className="page-head">
                <h2>Department : <span style={{color:'blue'}}>{dept} Department</span></h2>
                <h2>Your Account Balance : <span style={{color:'blue'}}>{balance}</span></h2>
            </div>
        <br></br>
        <div style={{marginLeft:'20px'}}>
        <button style={{width:'100px', height:'70px', backgroundColor:'lightblue'}}>
        <Link
          to={"/MakePayment"}
          state={{ }}
        >Make Payment
        </Link>
        </button>
        </div>
            
            
        </div>
    )
}

export default DeptHead;