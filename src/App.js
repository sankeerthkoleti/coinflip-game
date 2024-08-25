import React, { useState } from "react"; import { ethers } from "ethers"; // For ethers version 6.x
import CoinFlip from "./CoinFlip.json";
import "./App.css"


const App = () => {
 const [betAmount, setBetAmount] = useState(""); 
const [side, setSide] = useState(""); 
const [result, setResult] = useState("");
const contractAddress = "0xAeD6a8215620764C427ee99f44f2729D0ce11373";

const flipCoin = async () => {
  if (!betAmount || side === "") {
      setResult("Please enter a bet amount and select a side.");
      return;
  }
//
  if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum); // Use BrowserProvider for MetaMask
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, CoinFlip.abi, signer);
      
      try {
          const tx = await contract.flipCoin(Number(side), {
              value: ethers.parseEther(betAmount), // Use ethers.parseEther instead of ethers.utils.parseEther
          });
          await tx.wait(); // Wait for the transaction to be mined

          setResult("Coin flip transaction successful!");
      } catch (err) {
          console.error(err);
          setResult("Transaction failed! Please check the console for details.");
      }
  } else {
      setResult("Please install MetaMask!");
  }
};





return (
       <div className="c"> 
         <div className="container">
         <h1>Coin Flip Game</h1>
         <select onChange={(e) => setSide(e.target.value)} className="o">
             <option value="">Select Side</option>
             <option value="0">
               Head
             </option>
            <option value="1">
             Tail
            </option>
         </select>
         <div className="inputs">
             <label htmlFor="amount">Amount:</label>
             <input
                type="number"
                id="amount"
                placeholder="Bet Amount" 
                onChange={(e) => setBetAmount(e.target.value)} 
                className="i"
              />
        </div>
         <button onClick={flipCoin}>Flip Coin</button>
         
         
       </div>
  
       </div>
      
     );
};

export default App;




