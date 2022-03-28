import styled from "styled-components";

export const NoteWrapper = styled.div`
    display: flex;
    max-width: 350px;
    height: 200px;
    background:#0E191D ;
    border-radius: 5px 15px;
    padding: 5px;
    padding-bottom: 10px;
    flex-direction: column;

    @media screen and (max-width:540px){
        max-width: 220px;
        height: 150px;
    }
    
    &:hover{
        box-shadow: 0px 0px 48px -8px rgba(0,0,0,1);
-webkit-box-shadow: 0px 0px 48px -8px rgba(0,0,0,1);
-moz-box-shadow: 0px 0px 48px -8px rgba(0,0,0,1);
    }
    &.red{
        background:#870000 ;
    }
    &.yellow{
        background: #C18E02;
    }
   &.green{
        background: #088E5B;
    }
    .maximize{
        background: transparent;
        cursor: pointer;
        color: #fff;
        font-size: 1.2rem;

        &:hover{
            color: #DFB20C;
        }
        @media screen and (max-width:540px){
            font-size: 1rem;
    }
    }

    .delete{
        background: transparent;
        cursor: pointer;
        color: #fff;
        font-weight: 900;
        font-size: 1.2rem;

        &:hover{
            color: #DFB20C;
        }
        @media screen and (max-width:540px){
            font-size: 1rem;
    }
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    padding: 0px 10px 0px 10px;
    color:#fff;
    height: 50px;
    gap: 10px;
    font-weight:600;
    letter-spacing: 2px;
    font-size: 1.2rem;
    border-bottom:2px solid #2B4D58;
    @media screen and (max-width:540px){
        letter-spacing: 1px;
        font-size:12px;
        font-weight:300;
    }

`;

export const NoteBodyWrapper = styled.div`
    padding: 10px;
    background: transparent;
    height: 200px;
`;

export const NoteParagraph = styled.p`
    background: transparent;
    color: #C3C3C3;
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    max-height: 100px;
    text-overflow: ellipsis;
    max-width: 100%;
    @media screen and (max-width:540px){
        
        font-size:13px;
       
    }


`;

export const NoteFooter= styled.div`
    display: flex;
    background: transparent;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-top:2px solid #2B4D58;
    color: #cecece;
    font-family: Fira Mono, monospace;

    @media screen and (max-width:540px){
       
        font-size:10px;
    }
`;