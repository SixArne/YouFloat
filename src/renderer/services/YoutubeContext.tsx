import React, {FunctionComponent, useState} from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

type YoutubeProps = {
 children: React.ReactNode;
}

const YoutubeContext = React.createContext<any>(null);

const YoutubeApi: FunctionComponent<YoutubeProps> = (props: YoutubeProps) => {
 const [ytVideo, setYtVideo] = useState<string | null>(null);
 const [ytVideos, setYtVideos] = useState<Object | null>(null);
 const [apiKey, setApiKey] = useState<string | null | undefined>(process.env.YOUTUBE_KEY);

 React.useEffect(() => {
  dotenv.config();
  setApiKey(process.env.YOUTUBE_KEY);
 }, []);

 const searchVideosByQuery = async (query: string) => {
  const q = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${query}&part=snippet&videoEmbeddable=true&type=video&maxResults=30`;
  const result = await axios.get(q);

  setYtVideos(result.data.items);
 }

 return (
  <YoutubeContext.Provider value={{searchVideosByQuery, ytVideos, setYtVideo, ytVideo}}>
   {props.children}
  </YoutubeContext.Provider>
 )
}

export {
 YoutubeApi,
 YoutubeContext,
};
