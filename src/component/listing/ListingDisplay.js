import React from 'react';

const ListingDisplay = (props)=>{
    const renderRest = ({restData})=>{
        if(restData){
          if(restData.length > 0){
            return restData.map((item)=>{
                return (
                    <h2>Item</h2>
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
                <h2>Loading...</h2>
            )
        }
    }
    return(
        <>
            {renderRest(props)}
        </>
    )
}
export default ListingDisplay;