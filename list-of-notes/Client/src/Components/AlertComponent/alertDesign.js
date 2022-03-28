import styled from 'styled-components'

export const AlertWrapper=styled.div`
    display: flex;  
    min-width: 200px;
    height: 40px;
    border-radius: 10px;
    padding:10px 15px 10px 20px;
    background: green;
    position: fixed;
    top: 85%;
    opacity: 0;
    left: 1%;
    justify-content: space-between;
    gap:20px ;
    align-items: center;
    cursor: pointer;
    transition: opacity 1s ease-in-out;
    box-shadow: 0px 0px 54px -6px rgba(0,0,0,1);
-webkit-box-shadow: 0px 0px 54px -6px rgba(0,0,0,1);
-moz-box-shadow: 0px 0px 54px -6px rgba(0,0,0,1);
    &.delete{
        background: #870000;
        color:#fff;
        opacity: 1;
        transition: opacity 1s ease-in-out;
    }
    &.add{
        background: #088E5B;
        color:#fff;
        transition: opacity 1s ease-in-out;
        opacity: 1;
     
     
    }
    .close{
        background: transparent;
        font-size: 1.5rem;
        justify-self: flex-end;
        cursor: pointer;
        &:hover{
            color:#DFB20C;
        }
    }

`
export const AlertMessage=styled.div`
    background: transparent;
    font-size: 1.3rem;
    

`