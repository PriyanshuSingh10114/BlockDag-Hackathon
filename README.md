✍ ScribbleAI 🎨 + Blockchain

Unleash your creativity with the power of AI and blockchain!

ScribbleAI is a full-stack AI-powered web application that lets users generate creative content and stunning images, manage credits, and upgrade via flexible plans. With blockchain integration, ScribbleAI now stores your AI-generated creations securely and immutably, bringing transparency, traceability, and ownership via Ethereum smart contracts.


---

✨ Features

🔐 User Authentication with JWT

🛡 Secure Password Hashing using bcrypt

💳 Credit-Based System for generation tasks

🛍 Plan Purchase System to top-up credits

🖼 AI-Based Image & Content Generation

💾 Blockchain Storage of Art Hashes

🧾 Optional NFT Minting (via Smart Contract)

📱 Responsive UI powered by Tailwind CSS

🔔 Toast Notifications for seamless feedback

🔒 Protected Routes & session handling



---

🧰 Tech Stack

Frontend: React ⚛, React Router 🔀, Tailwind CSS 💨, Axios 📡, React Toastify 🍞, Web3.js/ethers.js 🌐
Backend: Node.js 🌐, Express.js 🚂, MongoDB 🍃, Mongoose 🧬, JWT 🪪, bcrypt 🔑
Blockchain: Solidity ⚖, Truffle ⚙, Ganache 🧪, MetaMask 🦊, Infura 📡
Other: dotenv 🌱, Framer Motion 🎞


---

🚀 Getting Started

✅ Prerequisites

Node.js (v16+ recommended)

npm or yarn

MongoDB Atlas or local MongoDB

MetaMask browser extension

Ganache (for local blockchain)

Truffle installed globally (npm install -g truffle)


🛠 Installation

1. Clone the Repository

git clone https://github.com/yourusername/scribbleai.git
cd scribbleai

2. Setup the Backend 🔙

cd Server
npm install

Create a .env file in the Server directory:

PORT=5000
MONGODB_URI="your_mongodb_connection_string"
JWT_SECRET="your_jwt_secret"

Start the backend server:

npm start

3. Setup the Frontend 🔜

cd ../Client/scribble-ai
npm install
npm start

Visit: http://localhost:3000


---

4. Setup Blockchain Environment ⛓

mkdir blockchain
cd blockchain
npm init -y
npm install --save-dev truffle dotenv @openzeppelin/contracts

Initialize Truffle:

npx truffle init

Create truffle-config.js with local network (Ganache) config:

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.8.20"
    }
  }
};

Write a smart contract under blockchain/contracts/ImageStore.sol:

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ImageStore {
    struct Image {
        string hash;
        address creator;
    }

    Image[] public images;

    event ImageStored(address indexed creator, string hash);

    function storeImage(string memory _hash) public {
        images.push(Image(_hash, msg.sender));
        emit ImageStored(msg.sender, _hash);
    }

    function getAllImages() public view returns (Image[] memory) {
        return images;
    }
}

Migrate it:

truffle migrate --network development


---

🧠 How Blockchain Integration Works

1. After image generation, its hash (or CID if using IPFS) is sent to the smart contract.


2. The smart contract stores the hash on Ethereum via Ganache locally.


3. Optionally, you can add NFT minting to allow ownership verification.


4. Users connect MetaMask to interact with smart contract (e.g. verifying art ownership).




---

📁 Folder Structure

ScribbleAI/
├── Client/
│   └── scribble-ai/        # ⚛ React frontend
├── Server/
│   ├── controllers/        # 🎮 Express controllers
│   ├── models/             # 🧬 Mongoose models
│   ├── routes/             # 🛣 Express routes
│   └── ...                 # 🧾 Middleware, config
├── blockchain/             # ⛓ Smart contracts & Truffle config
│   ├── contracts/          # Solidity smart contracts
│   ├── migrations/         # Truffle migration scripts
│   ├── truffle-config.js   # Truffle configuration


---

🔐 Environment Variables

Server .env:

PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret


---

🧑‍💻 Usage

1. Register or Login 📝


2. Generate content/image 🎨


3. Credit deducted per generation 💳


4. Store image hash to blockchain ⛓


5. View all created hashes or verify ownership




---

---

📄 License

This project is licensed under the MIT License.


---


💬 Made with ❤ by Team Neural Net
