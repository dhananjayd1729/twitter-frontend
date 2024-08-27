import { useState } from "react";
import AddTweet from "../AddTweet/AddTweet.jsx";
import TweetList from "../TweetList/Tweetlist.jsx"

const dummyTweets = [ 
  {id:0, content: "wassup", likeCount: 5, createdAt: new Date()},
  {id:1, content: "hello there", likeCount: 25, createdAt: new Date()},
  {id:2, content: "new tweet", likeCount: 15, createdAt: new Date()},
  {id:3, content: "tech cummunity wadaup", likeCount: 10, createdAt: new Date()}
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
    const handleEditTweet = (tweet) => {
        setTweet(tweets.map((currentTweet) => {
            if(currentTweet.id === tweet.id){
                return tweet;
            }else{
                return currentTweet;
            }
        }))
    }
    const sortTweets = () => {
        tweets.sort((tweet1, tweet2)=> tweet2.createdAt - tweet1.createdAt);
        setTweet([...tweets]);
    }

    return (
        <>
            <AddTweet onAddTweet = { handleAddTweet }/>
            <button onClick={sortTweets}>Sort Tweets</button>
            <TweetList tweets = { tweets } onEditTweet = {handleEditTweet}/>
        </>
    )
}

export default Twitter;