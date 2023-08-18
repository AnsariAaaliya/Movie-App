import { useState } from "react";

export function Counter(){
    const [like,setLike]= useState(0);
    const [dislike,setDisLike]= useState(0);

    return(
        <>
        <div className="counter-container">
            <button onClick={()=>setLike(like+1)} className="box"><img src="https://cdn-icons-png.flaticon.com/128/2011/2011112.png" alt="" className="box"/ >{like}</button>
            <button onClick={()=>setDisLike(dislike+1)} className="box"><img src="https://cdn-icons-png.flaticon.com/128/4837/4837019.png" alt="" className="box"/>{dislike}</button>

        </div>
        </>
    )

}