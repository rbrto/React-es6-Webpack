import React from 'react';

/*
  Stateless Functional Components
  en este componente las props pueden ser pasadas como parametros usando arrow function de es6
  recibo las 2 props video y onVideoSelect
*/

const VideoListItem = ({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url;

  /*
    funcion nombre onclick sin parametros llama al metodo onVideoSelect con la referencia video
  */
  return (
    <li onClick={ () => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
