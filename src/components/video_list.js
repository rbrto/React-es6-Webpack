import React from 'react';
import VideoListItem from './video_list_item';

/*
  Stateless Functional Components
  recibo las props como parametro {onVideoSelect y videos} luego mapeo la props videos
  para crear componentes VideoListItem dinamicos de acuerdo al tamaño del arreglo,
  cada video con una propiedad onVideoSelect que usará el metodo onVideoSelect de VideoList, key le asignará
  un identificador unico a cada componente y video que será el video pasado en cada iteracion
*/

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />
    );
  });

  return (
    <div className="col-md-4">
      <ul className="list-group">
        {videoItems}
      </ul>
    </div>
  );

};

export default VideoList;
