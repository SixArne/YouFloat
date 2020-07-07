import React, {FunctionComponent, useState} from 'react';
import {useHistory} from 'react-router-dom';
const { remote } = window.require('electron');

type WindowProps = {
 children: React.ReactNode;
}

const WindowContext = React.createContext<any>(null);

const WindowApi: FunctionComponent<WindowProps> = (props: WindowProps) => {
 const [searchMode, setSearchMode] = useState<boolean>(true);
 const [watchMode, setWatchMode] = useState<boolean>(false);
 const [pinMode, setPinMode] = useState<boolean>(false);
 const history = useHistory();

 const toggleMode = (url?: string) => {
  setSearchMode(!searchMode);
  setWatchMode(!watchMode);
  
  history.push(`/video/${url}`);
 }

 const togglePin = (): void => {
  const window = remote.getCurrentWindow();
  window.setAlwaysOnTop(!pinMode);
  setPinMode(!pinMode);
 }

 return (
  <WindowContext.Provider value={{ pinMode, watchMode, searchMode, toggleMode, togglePin }}>
   {props.children}
  </WindowContext.Provider>
 )
};

export {
 WindowApi,
 WindowContext,
};
