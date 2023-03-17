import React from 'react';
import {Link} from 'react-router-dom';
import './quicksearch.css';
const QuickDisplay = (props)=>{
    const renderMeal=({mealData})=>{
          if(mealData){
            return mealData.map((item)=>{
                return(
                    <Link to={`/listing/${item.mealtype_id}`} key={item._id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt="breakfast"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    <span>{item.mealtype}</span>
                                </div>
                                <div className="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>                
                )
            })
          }
    }
    return(
        <>
            <div id="quickSearch">
                <span id="QuickHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurants By Meal Type
                </span>
                {renderMeal(props)}
            </div>
             
        </>
    )
}
export default QuickDisplay;