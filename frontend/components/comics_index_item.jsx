import React from 'react';

const ComicsIndexItem = ({ comic }) => {

  return(
    <li>
      <img src={ comic.imageUrl } />
      { comic.title }
    </li>
  );
};

export default ComicsIndexItem;
