import { Search } from '@mui/icons-material'
import React from 'react'
import { useEffect } from 'react';
import TwitterTimelineEmbed from './TwitterTimelineEmbed';
import "./Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets-input'>
            <Search className='widgets-searchIcon'/>
        <input placeholder='キーワード検索' type='text'/>
        </div>


        <div className='widgets-widgetContainer'>
            <h2>吉野敏明X投稿まとめ</h2>
    
            <TwitterTimelineEmbed />


        </div>
    </div>
  )
}

export default Widgets