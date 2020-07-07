import React, {FunctionComponent, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {WindowContext, YoutubeContext} from '../services';

import './Landing.scss';
import {Header} from '../components';


const Landing: FunctionComponent = () => {
 const {ytVideos} = useContext(YoutubeContext);
 const {toggleMode} = useContext(WindowContext);

 useEffect(()=> {
     console.log(ytVideos);
 }, [])

 return (
  <div className="page-landing-bg">
   <Header/>
   <div className="page-landing-list">
    {
     (ytVideos)? (
      ytVideos.map((vid: any) => {
       return (
        <Link to={`/video/${vid.id.videoId}`} onClick={() => toggleMode(vid.id.videoId)} className="page-landing-video">
         <img src={vid.snippet.thumbnails.high.url} alt=""/>
         <div>
          <h1>{vid.snippet.title}</h1>
          <h3>{vid.snippet.channelTitle}</h3>
         </div>
        </Link>
       )
      })
     ) : <div>none</div>
    }
   </div>
  </div>
 )
}

export default Landing;
