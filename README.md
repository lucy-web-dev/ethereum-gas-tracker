# Ethereum Gas Tracker
The Ethereum Gas Tracker provides real-time insights into gas fees and transaction costs on the Ethereum Mainnet. It enables users to make informed decisions by displaying the latest gas prices, block updates, and estimated transaction costs for popular actions such as token transfers, swaps, and liquidity additions.



## Table of Contents

- [Tech-Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [How to Run the Application](#how-to-run-the-application)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Contact](#contact)

## Tech-Stack
- Frontend: React.js
- Backend: Node.js,
- Blockchain Data: Etherscan API

## Features
This Ethereum Gas Tracker application includes the following features:
- **Real-Time Gas Prices:** Displays Low, Average, and High gas prices with associated costs and estimated transaction times.
- **Transaction Cost Estimates:** Calculates and displays gas costs for various Ethereum transactions, including token transfers, swaps, and more.
- **Gas Trends Graphs:** Hourly and daily gas price trends for better planning.

## Getting Started
### Prerequisites
- **Node.js:** Ensure that you have Node.js installed on your system.
- **Etherscan API Key:** Obtain an API key from Etherscan to fetch Ethereum data.

### Setting Up Etherscan API 
- Visit the [Etherscan website](https://docs.etherscan.io/getting-started/viewing-api-usage-statistics).
- Register for a free account and generate an API key.


### How to Run the Application
1. Clone the repository:
    ```bash
    git clone https://github.com/0xmetaschool/ethereum-gas-tracker.git
    ```
2. Install Dependencies: Navigate to the project directory and install the necessary dependencies:
    ```bash
    cd ethereum-gas-tracker
    npm install --y
    ```
3. Configure Environment Variables:
     - Open the config.env file in the root directory.
     - Replace the placeholder for VITE_ETHERSCAN_API_KEY with your actual Etherscan API key:
   ```bash
   VITE_ETHERSCAN_API_KEY = 
    ```

4. Start the Development Server:
    ```bash
    npm run dev
    ```

## Screenshots

<table>
  <tr>
    <td><img src="https://github.com/0xmetaschool/ethereum-gas-tracker/blob/main/public/ethereum-gas-tracker-web3-template-header.png?raw=true" alt="Ethereyum Gas Tracker Template Header" width="310"></td>
    <td><img src="https://github.com/0xmetaschool/ethereum-gas-tracker/blob/main/public/ethereum-gas-tracker-web3-template-transaction-table.png?raw=true" alt="Ethereyum Gas Tracker Template Transaction Table" width="310"></td>
    <td><img src="https://github.com/0xmetaschool/ethereum-gas-tracker/blob/main/public/ethereum-gas-tracker-web3-template-graph.png?raw=true" alt="Ethereyum Gas Tracker Template Graph" width="310"></td>
  </tr>
</table>

## Contributing

We love contributions! Here's how you can help make the Ethereum Gas Tracker even better:

1. Fork the project (`git repo fork https://github.com/0xmetaschool/ethereum-gas-tracker.git`)
2. Create your feature branch (`git checkout -b New_Feature`)
3. Commit your changes (`git commit -m 'Added New Feature'`)

## Contact

Please open an issue in the GitHub repository for any queries or support.
