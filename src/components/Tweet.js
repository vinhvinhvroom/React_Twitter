import React from 'react'

const Tweet = (props) => {
  let media_url;
  let likeIcon;
  let retweetColor;

  const date = new Date(parseInt(props.timestamp))
  const postDate = date.toLocaleString('default', {month: 'short', day: 'numeric'})

  let handleExitReply = () => {
    confirm('Reply')
  }

  let handleExitRetweet = () => {
    confirm('Retweet')
  }

  let handleExitLike = () => {
    confirm('Like')
  }

  let handleExitMore = () => {
    confirm('More')
  }

  if ('media' in props.entities){
    media_url=
    <div className="media_url_box">
      <img className='media_img' src={props.entities.media[0].media_url} alt='media_img'/>
    </div>
  }

  if (props.liked === true){
    likeIcon =
      <i className="fas fa-heart heart"><span>     {props.favorite_count}</span></i>
  } else {
    likeIcon =
      <i onClick={handleExitLike} className="fas fa-heart grey_heart"><span>     {props.favorite_count}</span></i>
  }

  if(props.retweeted === true){
    retweetColor =
      <i onClick={handleExitRetweet} className="fas fa-retweet retweeted"><span>   {props.retweet_count}</span></i>
  } else {
    retweetColor =
      <i onClick={handleExitRetweet} className="fas fa-retweet grey"><span>     {props.retweet_count}</span></i>
  }

  return(
    <div className="row">
      <div className="column large-12">

        <div className="media-object tweetBox">

          <div className="media-object-section">
            <div className="thumbnail">
              <img src={props.profile_image_url} alt="img"/>
            </div>
          </div>

          <div className="media-object-section">

            <div className="name_box">
              <p id="name">{props.name}</p>
              <p id="screen_name">@{props.screen_name}</p>
              <li>{postDate}</li>
            </div>

            <p>{props.text}</p>

            {media_url}
            <div className="icons">
              <i onClick={handleExitReply} className="fas fa-reply reply"></i>
              {retweetColor}
              {likeIcon}
              <i onClick={handleExitMore} className="fas fa-ellipsis-h more"></i>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Tweet;
