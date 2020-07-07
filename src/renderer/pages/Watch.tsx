import React, {Fragment, FunctionComponent, useContext, useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {Player} from '../components';
import {WindowContext} from '../services';

const Watch: FunctionComponent = () => {
 const [url, setUrl] = useState<string>('');
 const history = useHistory();
 const { id } = useParams();
 const { searchMode } = useContext(WindowContext);

 useEffect(() => {
  setUrl(`https://www.youtube.com/embed/${id}`);
 }, [searchMode])

 useEffect(() => {
  if (searchMode) history.push('/');
 }, [searchMode])

 return (
  <div>
   {
    (url)? (
     <Player url={url}/>
    ): <Fragment/>
   }
  </div>
 )
}

export default Watch;
