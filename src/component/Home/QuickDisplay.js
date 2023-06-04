import React from 'react';
import {Link} from 'react-router-dom';
import './quicksearch.css';
const QuickDisplay = (props)=>{
    const renderMeal=({mealData})=>{
          if(mealData){
            return mealData.map((item)=>{
                return(
                    <div className='mealTypewp' key={item._id}>
                        <Link to={`/listing/${item.mealtype_id}`} className='mealType'>
                            <div className="tileContainer">
                                <div className="tileComponent1">
                                    <img src={item.meal_image} alt="breakfast"/>
                                </div>
                                <div className="tileComponent2">
                                    <div className="componentHeading">
                                        <span>{item.mealtype}</span>
                                    </div>
                                    <div className="componentSubHeading">
                                        <p>Explore city's top restaurants</p>
                                    </div>
                                </div>
                            </div>
                        </Link> 
                    </div>               
                )
            })
          }
    }
    return(
        <>
            <div id="quickSearch">
                <h2 id="QuickHeading">
                    Quick Search
                </h2>
                <h3 id="QuickSubHeading">
                    Find Restaurants By Meal Type
                </h3>
                <div className='meal_type_con'>
                    {renderMeal(props)}
                </div>
            </div>
             
        </>
    )
}
export default QuickDisplay;