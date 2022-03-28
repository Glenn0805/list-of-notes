import React from 'react'
import * as style from './alertDesign'
import {IoIosCloseCircle} from 'react-icons/io'


const Alert = ({alertMessage,alertClassname,setaddalert,addalert,deletealert,setdeletealert}) => {
    console.log(addalert)
    const alertStatus=()=>{
        
        if(alertClassname==="add"){
            setaddalert(false)
        }else
        if(alertClassname==="delete"){
            setdeletealert(false)
        }
    }
   
    setTimeout(alertStatus,3000)
    
    return (
        <>
            <style.AlertWrapper id="alert" className={alertClassname}>
                <style.AlertMessage>{alertMessage}</style.AlertMessage>
                <IoIosCloseCircle className="close" onClick={alertStatus}/>
            </style.AlertWrapper>
        </>
    )
}

export default Alert
