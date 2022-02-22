import React, { useState } from 'react'
import { css } from '@emotion/core'
import TableRows from "./TableRows"

const styles = css`
 .header {
   font-weight: bold;
 }

 .table {
   padding: 32px;
   background-color: grey;
   font-size: 24px;
   border-radius: 4px;
 }
`

function TxTable(){
  const [rowsData, setRowsData] = useState([]);

  const addTransaction = ()=>{
    const rowsInputs={
      userId:'',
      description:'',
      merchantId:'',
      debitCredit:'',
      amount:''
    }
    setRowsData([...rowsData, rowsInputs])
  }

  const deleteTransaction = (i)=>{
    const rows = [...rowsData];
    rows.splice(i,1);
    setRowsData(rows);
  }

  const handleChange = (i, event)=>{
    const { name, value } = event.target;
    const rowsInput = [...rowsData];
    rowsInput[i][name] = value;
    setRowsData(rowsInput);
  }

  return (
    <div>
      <div>
        <div>
          <table className='table'>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Description</th>
                <th>Merchant ID</th>
                <th>Debit / Credit</th>
                <th>Amount</th>
                <th><button className='btn' onClick={addTransaction}>Add Transaction</button></th>
              </tr>
            </thead>
            <tbody>
              <TableRows rowsData={rowsData} deleteTransaction={deleteTransaction} handleChange={handleChange} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default TxTable;