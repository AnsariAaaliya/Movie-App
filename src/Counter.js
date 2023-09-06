import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Badge } from "@mui/material";

export function Counter(){
    const [like,setLike]= useState(0);
    const [dislike,setDisLike]= useState(0);
useEffect(()=>{
    console.log("like is changed", like);
    //with help of useEffect the whole props and state will be changed and because of it here like and dislike both are calles
});

useEffect(()=>{
    console.log("like is changed", like);
    console.log("like is changed", like);
    //here onlu callesd like beacuse of we passed the dependency array
},[like]);
    return(
        <>
        <div className="counter-container">
           {/* <button onClick={()=>setLike(like+1)} className="box"><img src="https://cdn-icons-png.flaticon.com/128/2011/2011112.png" alt="" className="box"/ >{like}</button>
            <button onClick={()=>setDisLike(dislike+1)} className="box"><img src="https://cdn-icons-png.flaticon.com/128/4837/4837019.png" alt="" className="box"/>{dislike}</button>
    */}
        <IconButton 
            color="primary"
            onClick={()=>setLike(like+1)}
            className="box co"  
            aria-label="like movie"      
        >
            <Badge badgeContent={like} color="primary">
            <img src="https://cdn-icons-png.flaticon.com/128/2011/2011112.png" alt="" className="box"/>
    
            </Badge>
        </IconButton>
        <IconButton 
            color="error"
            onClick={()=>setDisLike(dislike+1)}
            className="box co" 
            aria-label="dislike movie"      
            >
                <Badge badgeContent={dislike} color="error">
                <img src="https://cdn-icons-png.flaticon.com/128/4837/4837019.png" alt="" className="box"/>
        
                </Badge>
        </IconButton>
        </div>
        </>
    )

}