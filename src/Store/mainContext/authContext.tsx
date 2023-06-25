
import { createContext, useReducer, useState } from "react";



const authContext:any = createContext({
    auth:[]
    
});


const intialState:any = []




export const AuthContextWrapper:React.FC<any> = (props) => {
    const [authData, setAuthData] = useState(intialState);

    return(
        <authContext.Provider value={
            {
               auth: authData,
               setAuthData
            }
        }>
           {props.children} 
        </authContext.Provider> 
    )
}



export default authContext;
