import { useState } from "react";
import AddTweet from "../AddTweet/AddTweet.jsx";
import TweetList from "../TweetList/Tweetlist.jsx"

const dummyTweets = [ 
//   {id:0, content: "wassup", likeCount: 5},
//   {id:1, content: "hello there", likeCount: 25},
//   {id:2, content: "new tweet", likeCount: 15},
//   {id:3, content: "tech cummunity wadaup", likeCount: 10}
]

function Twitter(){
    const [tweets, setTweet] = useState(dummyTweets);
    const handleAddTweet = (text) => {
        const nextId = (tweets.length > 0) ? tweets[tweets.length-1].id + 1 : 0
        setTweet([...tweets, {
            content: text,
            likeCount: Math.floor(Math.random()*10),
            id: nextId,
            createdAt: new Date()
        }])
    }
    return (
        <>
            <AddTweet onAddTweet = { handleAddTweet }/>
            <TweetList tweets = { tweets }/>
        </>
    )
}

export default Twitter;