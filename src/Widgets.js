import React from 'react'
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className = "widgets">
        <div className="widgets__input">
          <SearchIcon className = "widgets__searchIcon" />
          <input type="text" placeholder='Search Twitter' />
        </div>
        <div className="widgets__widgetsContainer">
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={"1631700975479029767"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="vedat_cinbat"
          options={{ height: 300 }}
        />

        {/* <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />  */}
        </div>
    </div>
  )
}

export default Widgets;