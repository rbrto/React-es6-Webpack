import React from 'react';

/*
  Stateless Functional Components
  en este tipo de componente las props pueden ser pasadas como parametros usando arrow function de es6
*/

const VideoDetail = ({video}) => {

  if (!video) {
    return <div>Loading...</div>;
  }

 /*
   obtengo la key del video y contruyo la url que generara el video en el iframe
   usando interpolacion es6
 */

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log('url '+url);

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );

};

export default VideoDetail;
