import React, {Component} from "react";
class MenuDisplay extends Component{
    orderId = [];
    placeOrder=(id)=>{
        this.orderId.push(id);
        this.props.finalOrder(this.orderId);
    }
    removeOrder=(id)=>{
        if(this.orderId.indexOf(id)>-1){
            this.orderId.splice(this.orderId.indexOf(id),1)
        }
        this.props.finalOrder(this.orderId);
    }
    renderCart = (orders)=>{
        if(orders){
            return orders.map((item, index)=>{
                return <b key={index}>{item} &nbsp;</b>
            })
        }
    }
    renderMenu=({menuData})=>{
        if(menuData){
            return menuData.map((item)=>{
                return(
                    <div className="menu_sngl" key={item.menu_id}>
                        <div className="menu_col1">
                            <div className="menu_id">{item.menu_id}</div>
                            <div className="menu_img">
                                <img src={item.menu_image} alt={item.menu_name}></img>
                            </div>
                        </div>
                        <div className="menu_col2">
                            <div className="menu_name">
                                {item.menu_name}
                            </div>
                            <div className="menu_price">
                                Rs.{item.menu_price}
                            </div>
                        </div>
                        <div className="menu_col3">
                            <button className="btn btn-success" onClick={()=>this.placeOrder(item.menu_id)}>
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>&nbsp;
                            <button className="btn btn-danger" onClick={()=>this.removeOrder(item.menu_id)}>
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                        </div>
                    </div>
                )
            })
        }
    }
    render(){
        return(
            <>
                <div className="menu_item_cnt">
                    <div className="mnu_ord">
                        <h2>Item Added</h2>
                        <h3>Item Number {this.renderCart(this.orderId)} Added</h3>
                    </div>
                    <div className="menu_rnd">
                        {this.renderMenu(this.props)}
                    </div>
                </div>
            </>
        )
    }
}
export default MenuDisplay;