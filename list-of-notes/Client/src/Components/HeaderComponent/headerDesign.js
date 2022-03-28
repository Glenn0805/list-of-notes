import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    max-width: 100%;
    justify-content: space-between;
    padding: 5px 25px;
    overflow: hidden;
    background: #0E191D;
    position: sticky;
    box-shadow: 0px 5px 3px -3px rgba(255,255,255,0.28);
-webkit-box-shadow: 0px 5px 3px -3px rgba(255,255,255,0.28);
-moz-box-shadow: 0px 5px 3px -3px rgba(255,255,255,0.28);

    .addNote{
        background: transparent;
        font-size: 1.5rem;
        transition: transform .6s;
    }

`

export const HeaderLogo = styled.div`
    color: #FFFFFF;
    font-size: 2.3rem;
    font-family: Coustard, serif;
    font-weight: 999;
    letter-spacing: 2px;
    background: transparent;
`

export const AddButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    border-radius: 30px;
    width: 100px;
    height: 45px;
    cursor: pointer;
    font-size: 1.1rem;
    justify-self: flex-end;
    background: #fff;
    transition: background .5s ;
    &:hover{
        background:#DFB20C ;
        .addNote{
            transform: rotate(180deg);
        }
    }
`;
