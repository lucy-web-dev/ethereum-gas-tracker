import React from 'react';
import './css/GasTable.css';

let GasTable = ({ transactionData, gasData, ethPrice, onSort, sortConfig }) => {
  let getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  let calculateCost = (gasLimit, gasPrice) => {
    if (!gasData || !ethPrice) return "N/A";
    
    let gasPriceEth = gasPrice * 1e-9;
    let costEth = gasLimit * gasPriceEth;
    let costUsd = costEth * ethPrice;
    
    return `$${costUsd.toFixed(2)}`;
  };

  return (
    <table className="gas-table">
      <thead>
        <tr>
          <th className="align-left" onClick={() => onSort('action')}>
            Action
            <span className={`sort-indicator ${getClassNamesFor('action')}`}></span>
          </th>
          <th className="align-left" onClick={() => onSort('gasLimit')}>
            Gas Limit
            <span className={`sort-indicator ${getClassNamesFor('gasLimit')}`}></span>
          </th>
          <th className="align-left" onClick={() => onSort('low')}>
            Low Cost
            <span className={`sort-indicator ${getClassNamesFor('low')}`}></span>
          </th>
          <th className="align-left" onClick={() => onSort('avg')}>
            Average Cost
            <span className={`sort-indicator ${getClassNamesFor('avg')}`}></span>
          </th>
          <th className="align-left" onClick={() => onSort('high')}>
            High Cost
            <span className={`sort-indicator ${getClassNamesFor('high')}`}></span>
          </th>
        </tr>
      </thead>
      <tbody>
        {transactionData.map((transaction, index) => (
          <tr key={index}>
            <td className="align-left">{transaction.action}</td>
            <td className="monospace align-left">{transaction.gasLimit.toLocaleString()}</td>
            <td className="cost cost-low align-left">
              {calculateCost(transaction.gasLimit, gasData?.low?.price)}
            </td>
            <td className="cost cost-avg align-left">
              {calculateCost(transaction.gasLimit, gasData?.avg?.price)}
            </td>
            <td className="cost cost-high align-left">
              {calculateCost(transaction.gasLimit, gasData?.high?.price)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GasTable;
