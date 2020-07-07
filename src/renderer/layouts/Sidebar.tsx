import * as React from 'react';
const { remote } = window.require('electron');

import {WindowContext, YoutubeContext} from '../services';

import './Sidebar.scss'

import Close from '../assets/images/Close.svg';
import Maximize from '../assets/images/Maximize.svg';
import Minimize from '../assets/images/Minimize.svg';
import Search from '../assets/images/Search.svg';
import Watch from '../assets/images/Watch.svg';
import Pin from '../assets/images/Pin.svg';
import {FunctionComponent, useContext} from 'react';

type SidebarProps = {
 children: React.ReactNode;
}

const Sidebar: FunctionComponent<SidebarProps> = (props: SidebarProps) => {
 const {searchMode, watchMode, pinMode, toggleMode, togglePin} = useContext(WindowContext);
 const {ytVideo} = useContext(YoutubeContext);

 const handleClose = () => {
  const window = remote.getCurrentWindow();
  window.close();
 }

 const handleMaximize = () => {
  const window = remote.getCurrentWindow();
  window.maximize();
 }

 const handleMinimize = () => {
  const window = remote.getCurrentWindow();
  window.minimize();
 }

 return (
  <div className="app">
   {props.children}
   <div className="sidebar">
    <div className="sidebar-menu">
     <div className="sidebar-menu-window-buttons">
      <div className="btn-box">
       <img src={Close}    onClick={() => handleClose()}    alt="close"    className="btn window"/>
      </div>
      <div className="btn-box">
       <img src={Maximize} onClick={() => handleMaximize()} alt="maximize" className="btn window"/>
      </div>
      <div className="btn-box">
       <img src={Minimize} onClick={() => handleMinimize()} alt="minimize" className="btn window"/>
      </div>
     </div>
     <div className="sidebar-menu-app-buttons">
      <div className={`btn-box ${(searchMode)? 'toggled': '' }`}>
       <img
        src={Search}
        alt="search"
        onClick={() => toggleMode()}
        className="btn"
       />
      </div>
      <div className={`btn-box ${(watchMode)? 'toggled': '' }`}>
       <img
        src={Watch}
        alt="watch"
        onClick={() => toggleMode(ytVideo)}
        className="btn"
       />
      </div>
     </div>
     <div className="sidebar-menu-app-sticky-buttons">
      <div className={`btn-box ${(pinMode)? 'toggled': '' }`}>
       <img
        src={Pin}
        onClick={() => togglePin()}
        alt="pin"
        className="btn"
       />
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Sidebar;
