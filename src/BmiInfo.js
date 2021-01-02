import React from 'react'

export default function BmiInfo(props) {
   console.log(props)
   var date = new Date();
   var currDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    return (
              <div className="content"> 
                    <p>Date : {currDate}</p>
                    <div>Weight : {props.info.weight} Height : {props.info.height}</div>
                        <div>BMI : {props.info.bmi}</div>
                </div>
    )
}
