import styled from "styled-components";

export const PreviewWrapper = styled.div`
    width: 100%;
    position: fixed;
    padding-top: 30px;
    background:rgba(0,0,0,.8);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .red{
        background:#870000 ;
    }
    .yellow{
        background: #C18E02;
    }
   .green{
        background: #088E5B;
    }
`

export const PreviewBody = styled.div`
    width: 800px;
    display: flex;
    height: 500px;
    background: #0E191D;
    flex-direction: column;
    border-radius: 10px;    
    padding:5px;
    color: #cecece;
    font-size: 1.2rem;
    @media screen and (max-width:768px){
        width: 320px;
        height: 400px;
        font-size: 15px;
    }
    @media screen and (max-width:320px){
        width: 90%;
        height: 400px;
    }

`

export const PreviewHeader = styled.div`
    height: 40px;
    padding:0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    border-bottom: 1px solid #2B4D58;
    margin-bottom: 5px;
    .close{
        font-size: 1.5rem;
        transition: transform .5s;
        background: transparent;
        cursor: pointer;
        color:#cecece;
        &:hover{
            color:#DFB20C;
            transform: rotate(180deg);
        }
    }
    
`

export const PreviewTitle = styled.input`
    height: 30px;
    border: none;
    outline: none;
    font-size: 1.2rem; 
    padding: 3px 5px;
    width: 300px;
    font-weight: 999;
    color:#cecece;
    background: transparent;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: #cacaca;
        
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #cacaca;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #cacaca;
        }

        @media screen and (max-width:768px){
        font-size:15px ;
        font-weight: 400;
    }

`;

export const PreviewTextArea = styled.textarea`
    min-width: 700px;
    height: 370px;
    resize: none;
    background: transparent;
    outline: none;
    padding: 5px 10px;
    color:#fff;
    border:none;
    font-size: 1.2rem;
        ::-webkit-scrollbar {
            width: 10px;
            cursor: pointer;
         }
        ::-webkit-scrollbar-thumb {
            background-color: #cecece;
            outline: 1px solid #fff;
            cursor: pointer;
         }

         ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #cacaca;
        
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #cacaca;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #cacaca;
        }
        @media screen and (max-width:768px){
        font-size: 15px;
        min-width: 300px;
    }
`;

export const PreviewFooter = styled.div`
    display: flex;
    background: transparent;
    border-top: 2px solid #2B4D58;
    margin-top: 5px;
    align-items: center;
    padding: 10px;
    justify-content: flex-end;
`

export const PreviewSaveButton = styled.div`
    width: 120px;
    background: #cecece;
    padding:10px;
    height: 35px;
    display: flex;
    align-items: center;
    border-radius: 50px;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: 999;
    color: #000;
    gap:10px;

    .save{
        font-size: 2rem;
        color: #000;
        background: transparent;
        @media screen and (max-width:768px){
            font-size: 1.2rem;
    }
        
    }
    &:hover{
        background: #DFB20C;
    }
    @media screen and (max-width:768px){
        width: 80px;
        height: 20px;
        font-size: 1rem;
    }
`

export const PreviewBgColor = styled.div`
    background: transparent;
    display: flex;
    column-gap: 5px;
    align-items: center;
    padding-bottom: 2px;
    @media screen and (max-width:768px){
        column-gap: 2px;
    }
`

export const PreviewRadioButton = styled.input`
    cursor: pointer;
    background: transparent;
    color:red;
    
    
`

export const PreviewRadioButtonWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid #2B4D58;
    margin-bottom: 5px;
    font-size: 1.2rem;
    gap: 20px;
    padding: 0 20px;
    background: transparent;
    @media screen and (max-width:768px){
        column-gap: 10px;
        font-size: 13px;
        
    }
    
`