import React from 'react'
import Looks4Icon from '@mui/icons-material/Looks4';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PeopleIcon from '@mui/icons-material/People';
import { Button } from '@mui/material';
import "./Sidebar.css"



function Sidebar() {
  return (
    <div className='sidebar'>
        {/* アイコン */}
        <Looks4Icon className="sidebar_Looks4Icon"/>

        {/* サイドバーオプション */}
        <SidebarOption text="ホーム" Icon={HomeIcon}/>
        <SidebarOption text="検索" Icon={SearchIcon}/>
        <SidebarOption text="通知" Icon={NotificationsNoneIcon}/>
        <SidebarOption text="メッセージ" Icon={MailOutlineIcon}/>
        <SidebarOption text="いいねリスト" Icon={FavoriteBorderIcon}/>
        <SidebarOption text="コミュニティー" Icon={PeopleIcon}/>
        <SidebarOption text="プロフィール" Icon={PermIdentityIcon}/>


        {/* 投稿ボタン */}
        <Button variant="outlined" className='sidebar_tweet'fullWidth>投稿する</Button>

    </div>
  )
}

export default Sidebar