import Roman from "./Roman";

function TableRows({rowsData, deleteTransaction, handleChange}) {
    return(
        
        rowsData.map((transaction, i)=>{
            const {userId, description, merchantId, debitCredit, amount}= transaction;
            return(
                <tr key={i}>
                <td><input type="text" value={userId} onChange={(event)=>(handleChange(i, event))} name="userId" className="form-control"/></td>
                <td><input type="text" value={description}  onChange={(event)=>(handleChange(i, event))} name="description" className="form-control"/> </td>
                <td><input type="text" value={merchantId}  onChange={(event)=>(handleChange(i, event))} name="merchantId" className="form-control" /> </td>
                <td><input type="text" value={debitCredit}  onChange={(event)=>(handleChange(i, event))} name="debitCredit" className="form-control" /> </td>
                <td><input type="text" value={amount}  onChange={(event)=>(handleChange(i, event))} name="amount" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTransaction(i))}>Delete</button></td>
            </tr>
            )
        })
    )
    
}
export default TableRows;