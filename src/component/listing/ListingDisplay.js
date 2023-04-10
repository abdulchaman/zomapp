import React from 'react';
import {Link} from 'react-router-dom'
const ListingDisplay = (props)=>{
    const renderRest = ({restData})=>{
        const getMealBtnColor = (mealtype)=>{
            switch(mealtype){
                case "Breakfast":
                    return "label-primary";
                case "Lunch":
                    return "label-danger";
                case "Dinner":
                    return "label-success";
                case "Snacks":
                    return "label-info";
                default:
                    return "label-default";
            }
        }
        const getCusineBtnColor = (cusinetype)=>{
            switch(cusinetype){
                case "South Indian":
                    return "label-primary";
                case "Fast Food":
                    return "label-danger";
                case "North Indian":
                    return "label-success";
                case "Street Food":
                    return "label-info";
                default:
                    return "label-default";
            }
        }
        if(restData){
          if(restData.length > 0){
            return restData.map((item)=>{
                return (
                    <div className="item" key={item._id}>
                      <div className='row'>
                        <div className='col-md-5'>
                            <img src={item.restaurant_thumb} className="Image" alt={item.restaurant_name}></img>
                        </div>
                        <div className='col-md-7'>
                            <div className='hotel_name'>
                               <Link to={`/details?restId=${item.restaurant_id}`}>{item.restaurant_name}</Link>
                            </div>
                            <div className='city_name'>{item.address}</div>
                            <div className='city_name'>{item.rating_text}</div>
                            <div className='city_name'>Rs. {item.cost}</div>
                            <div className='labelDiv'>
                                {item.mealTypes.map((type)=>{
                                    return <><span className={`label ${getMealBtnColor(type.mealtype_name)}`} key={type.mealtype_id}>{type.mealtype_name}</span><span>&nbsp;</span></>
                                })}
                            </div>
                            <div className='labelDiv'>
                                {item.cuisines.map((type)=>{
                                    return <><span className={`label ${getCusineBtnColor(type.cuisine_name)}`} key={type.cuisine_id}>{type.cuisine_name}</span><span>&nbsp;</span></>                    
                                })}
                            </div>

                        </div>
                      </div>
                    </div>
                )
            })
          }
          else{
            return(
                <h2>No data as per filter</h2>
            )
          }
        }
        else{
            return(
                <>
                    <h2>Loading...</h2>
                    <img src="../images/loader.gif"></img>
                </>
             
            )
        }
    }
    return(
        <div id="content">
            {renderRest(props)}
        </div>
    )
}
export default ListingDisplay;