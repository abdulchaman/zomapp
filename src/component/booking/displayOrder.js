import React from "react";
const Display = (props)=>{
    const renderTable = ({orderData})=>{
        if(orderData){
            return orderData.map((item)=>{
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.hotelName}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <td>{item.cost}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            })
        }
    }
    return(
        <>
            <div className="container">
                <center><h2>Orders</h2></center>
                <table className="table">
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>RName</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Cost</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>BankName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable(props)}
                    </tbody>
                </table>

            </div>
        </>
    )
}
export default Display;