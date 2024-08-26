import { useState } from "react";

function AddTweet({ onAddTweet }){
    const [text, setText] = useState("");
    return (
        <>
            <input 
                placeholder="Add a tweet ..." 
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={( ) => { 
                onAddTweet(text);
                setText('');
            }}>
                Tweet
            </button>
        </>
    )
}

export default AddTweet;