import React from 'react';
import './commentItem.css';

const CommentItem = (props) => {
  return (
    <div className='commentItem'>
      <div className='commentItem__header'>
        <span className='commentItem__user'>{props.user}</span>
        <span className='commentItem__time'>{props.time}</span>
      </div>
      <div className='commentItem__text'>
        <p>{props.comment}</p>
      </div>
    </div>
  );
};

export default CommentItem;
