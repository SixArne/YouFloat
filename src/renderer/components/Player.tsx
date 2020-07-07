import React, {FunctionComponent} from 'react';

import './Player.scss';

type PlayerProps = {
 url: string;
}

const Player: FunctionComponent<PlayerProps> = (props: PlayerProps) => {
 return (
  <div className="player">
   <iframe
    src={props.url}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
   </iframe>
  </div>
 )
}

export default Player;
