import React from 'react';
import Tweet from '../components/Tweet'

const TwitterFeed = (props) => {

  const twitterMap = props.data.map((twitterObject) => {
    return (
      <Tweet
      name={twitterObject.user.name}
      screen_name={twitterObject.user.screen_name}
      profile_image_url={twitterObject.user.profile_image_url}
      retweet_count={twitterObject.retweet_count}
      favorite_count={twitterObject.favorite_count}
      text={twitterObject.text}
      entities={twitterObject.entities}
      liked={twitterObject.liked}
      retweeted={twitterObject.retweeted}
      timestamp={twitterObject.timestamp_ms}
      key= {twitterObject.user.name}
      />
    )
  })

  return(
    <ul >
      {twitterMap}
    </ul>
  )
};

export default TwitterFeed;
