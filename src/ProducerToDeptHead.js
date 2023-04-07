import React, { useState } from 'react';
import Web3 from 'web3';
import sendMoney from './contracts/sendMoney.json';

function App() {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (event) => {
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
      from: sender,
      value: web3.utils.toWei(amount, 'ether'),
    });

    alert('Sent!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Sender:
        <input type="text" value={sender} onChange={(event) => setSender(event.target.value)} />
      </label>
      <label>
        Recipient:
        <input type="text" value={recipient} onChange={(event) => setRecipient(event.target.value)} />
      </label>
      <label>
        Amount:
        <input type="text" value={amount} onChange={(event) => setAmount(event.target.value)} />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default App;
