import { useState } from "react";
import "./tweet.css";

function Tweet({ tweetId, content, likeCount, createdAt, onEdit}){
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className="tweet-wrapper">
                <div className="tweet-edit-wrapper">
                        <div className="tweet">
                            {
                                (isEditing) ? 
                                <input type="text" 
                                    value={content} 
                                    onChange={ (e)=>{
                                        onEdit({
                                            id:tweetId,
                                            content: e.target.value,
                                            likeCount: likeCount,
                                            createdAt: createdAt
                                        })
                                    }}>
                                </input> : content
                            }
                        </div>
                        <div className="edit-tweet">
                            <button onClick={ () => setIsEditing(!isEditing)}>
                                {(isEditing) ? "Save" : "Edit"}
                            </button>
                        </div>
                </div>
            
            <div className="like-time-wrapper">
                <div className="likes">
                    {likeCount} likes
                </div>
                <div className="time">
                    <b>Created at</b> {createdAt}
                </div>
            </div>
            
        </div>
    )
}

export default Tweet;