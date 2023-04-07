import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import sendMoney from './contracts/sendMoney.json';
import { useLocation } from "react-router-dom";
const SendToDeptHeadForm = ()=>{
    const location = useLocation();
    console.log(location);
    const [sender, setSender] = useState("0xC9313EB7C7cB5070782Fcecc05D16F99C8a7F71D");
    const [recipient, setRecipient] = useState(location.state.account);
    const [amount, setAmount] = useState('');

    const handleSubmit = async (event) => {
    event.preventDefault();
    // const recipient = deptAccount;
    const web3 = new Web3('http://localhost:7545'); // Connect to Ganache
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = sendMoney.networks[networkId];
    const sendMoneyInstance = new web3.eth.Contract(
        sendMoney.abi,
      deployedNetwork && deployedNetwork.address,
    );

    await sendMoneyInstance.methods.send(recipient).send({
      from: sender,
      value: web3.utils.toWei(amount, 'ether'),
    });

    alert('Sent!');
  };




    return(
        <div>

          <div style={{padding:'20px'}}>
            <form onSubmit={handleSubmit}>
            <br></br>
            <label>
                <h3>Enter the Amount to be Sent</h3>
                <input style={{height:'40px'}} type="text" value={amount} onChange={(event) => setAmount(event.target.value)} />
            </label>    
            <br></br>
            <br></br>
            <button style={{width:'100px', height:'50px' , backgroundColor:'lightblue', size:'20px'}} type="submit">Send</button>
            </form> 
          </div>
        </div>
    )
}


export default SendToDeptHeadForm;