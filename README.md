Coin Flip Game
This is a simple decentralized application (dApp) that allows users to bet on a coin flip using Ethereum. The game is hosted on Vercel and uses the Ethereum blockchain for handling bets and determining outcomes.

Table of Contents
Getting started
Project Structure
Requirements
Smart Contract Setup
Frontend Setup


Getting Started
This project is a basic example of a decentralized application built with React and Ethers.js, interacting with an Ethereum smart contract. It allows users to connect their MetaMask wallet, place a bet, and flip a coin to potentially win their bet.


Structure:
coinflip-game/
│
├── cache       
├── src/
│   ├── App.js              # Main React 
│   ├── App.css
|   ├── App.test.js
|   ├── coinflip.json        # ABM file 
│   └── ...
├── public/
│   └── ...                 # Static 
├── contractcode            # smart contract code
configurations
├── package.json            # Node.js dependencies
└── README.md               # Project documentation

Prerequisites
Before running this application, ensure you have the following installed:

Node.js (v14 or higher)
MetaMask browser extension:
install metamask in your browser.
A connection to solana test network 

Basic knowledge of React and blockchain development



Smart contract:

contract CoinFlip {
    enum Side { Heads, Tails }

    function flipCoin(Side _side) public payable returns (bool) {
        require(msg.value > 0, "Must send some ether to play");
        
        // Randomly select a side (for demo purposes)
        Side result = (block.timestamp % 2 == 0) ? Side.Heads : Side.Tails;

        if (result == _side) {
            payable(msg.sender).transfer(msg.value * 2); // Win: double the amount
            return true;
        }
        return false; // Lose
    }
}

deployed smart contract using remix 
fauset used - solana 
network - solana
ABM file:
[
	{
		"inputs": [
			{
				"internalType": "enum CoinFlip.Side",
				"name": "_side",
				"type": "uint8"
			}
		],
		"name": "flipCoin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	}
]

if you wanted to deploy again make change of contract address in main code. 
