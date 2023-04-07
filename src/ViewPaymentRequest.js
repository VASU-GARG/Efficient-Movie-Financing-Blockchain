import { useState } from "react";
import { useLocation } from "react-router-dom";
import sendMoney from './contracts/sendMoney.json';
import Web3 from 'web3';

const ViewPaymentRequest = () => {

    const location = useLocation();
    const [amount, setAmmount] = useState("50");
    const [recipient, setRecipient] = useState("0x5eD68Bb41b4cb4D7c7762cF918aE276C8dB53BFb");
    const [status, setStatus] = useState("accept");

    const accept = async (event) => {
        event.preventDefault();
        const web3 = new Web3('http://localhost:7545'); // Connect to Ganache
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = sendMoney.networks[networkId];
        const sendMoneyInstance = new web3.eth.Contract(
        sendMoney.abi,
        deployedNetwork && deployedNetwork.address,
    );

    await sendMoneyInstance.methods.send(recipient).send({
      from: location.state.deptAccount,
      value: web3.utils.toWei(amount, 'ether'),
      
    });
    setStatus("ACCEPTED");
    alert('Sent!');
    };



  return (
    <div style={{padding:'20px'}}>
      <h2>Pending Requests</h2>
      <br></br>
    <div className="card" >
        <h2>Amount : <span style={{color:'blue'}}>{amount}</span></h2>   
        <h2>Reason : <span style={{color:'blue'}}>purchase costume for co-dancers</span></h2>
        <form onSubmit={accept}>
        <br></br>
        <button style={{width:'100px', height:'50px' , backgroundColor:'lightblue', size:'20px'}} type="submit" >{status}</button>
        </form>
    </div> 
    </div> 
  );    
};

export default ViewPaymentRequest;
