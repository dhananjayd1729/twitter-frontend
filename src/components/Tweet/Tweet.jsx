import "./tweet.css";

function Tweet({ content, likeCount, createdAt}){
    return (
        <div className="tweet-wrapper">
            <div className="tweet">
                {content}
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