import React from 'react'
import "./Sidebar.css"
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBoderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from "@material-ui/core";
function Sidebar() {
  return (
    <div className = "sidebar">
        <TwitterIcon className = "sidebar__TwitterIcon" />
        <SidebarOption active text = "Home" Icon={HomeIcon} />
        <SidebarOption text = "Explore" Icon = {SearchIcon} />
        <SidebarOption text = "Notifications" Icon = {NotificationsNoneIcon} />
        <SidebarOption text = "Messages" Icon = {EmailOutlinedIcon} />
        <SidebarOption text = "Bookmarks" Icon = {BookmarkBoderIcon} />
        <SidebarOption text = "Lists" Icon = {ListAltIcon} />
        <SidebarOption text = "Profile" Icon = {PermIdentityIcon} />
        <SidebarOption text = "More" Icon = {MoreHorizIcon} />
        
        {/* Button -> Tweet*/}
        <Button variant="outlined" className = "sidebar__tweet">Tweet</Button>
    </div>
  )
}

export default Sidebar