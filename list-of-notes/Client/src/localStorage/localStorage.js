export const loadState=()=>{
    try{
        const savedState=localStorage.getItem('state');
        if(savedState===null){
            return undefined;
        }
        return JSON.parse(savedState);

    }catch(err){
        return undefined
    }

}

export const saveState=(state)=>{
    try{
        const savedState=JSON.stringify(state);
        localStorage.setItem("state",savedState)
    }catch(err){
        console.log(err)
    }
}

export const updateState=(state,updatedVal)=>{
    localStorage.setItem(state,updateState)
}

export const deleteState=(state)=>{
    localStorage.removeItem(state)
}