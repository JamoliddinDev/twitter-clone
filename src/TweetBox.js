import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Unnamed",
      username: "unnamed",
      verified: false,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://picsum.photos/50?random=5",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__tweetImage"
          type="text"
          placeholder="Enter image URL"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweets
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
