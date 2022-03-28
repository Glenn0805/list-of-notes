import styled from "styled-components";

export const FooterWrapper=styled.div`
    display: flex;
    flex-direction: column;
    min-height: 300px;
    //background: #0E191D;
    background:${props=>props.color};
    bottom: 0;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    color:#fff;
    padding:20px;
    padding-top:0px;
    max-width: 100%;
    
    border-top: 2px solid #161821;
    .nobg{
        background: transparent;
        cursor: pointer;
        color: rgba(255,255,255,0.6);
        transition: transform .8s;
        &:hover{
        color:#fff;
        transform: rotate(360deg);
    }
    }

    .label{
        background: transparent;
        margin-right: 2px;
    }

`;

export const DevInfoWrapper=styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background: transparent;
    padding:20px;
    padding-top: 0px;
    @media screen and (max-width:768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const DevInfo=styled.div`
    display: flex;
    flex-direction: column;
    background: #0E191D;
    font-size: 2rem;
    width: 150px;
    width: 300px;
`;

export const DevLogo=styled.img`
    width: 200px;
    height: 200px;
    background: transparent;
    align-self: center;

    &:hover{
        filter: drop-shadow(0 0 0.75rem crimson);
    }
    
`;
 export const Contact=styled.div`
    display: flex;
    background: transparent;
    padding: 10px;
    justify-content: space-evenly;
    transition: transform 2s;
 `

 export const DevName=styled.label`
    background: none;
    text-align: center;
    font-size: 1.5rem;
    color: rgba(255,255,255,0.6);
    padding-bottom: 5px;
    font-weight: 999;
    letter-spacing: 2px;
 `;

export const FooterLabel=styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    text-align: center;
    font-size: 1rem;
    color: rgba(255,255,255,0.6);
    padding-bottom: 5px;
`;