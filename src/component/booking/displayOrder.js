import React from "react";
import "./placeOrder.css"
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
            <div className="dis_ord">
                <div className="container-fluid">
                    <center><h2 className="dis_ord_ttl">Orders</h2></center>
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
            </div>
        </>
    )
}
export default Display;