import { Search } from '@mui/icons-material'
import React from 'react'

import "./Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets-input'>
            <Search className='widgets-searchIcon'/>
        <input placeholder='キーワード検索' type='text'/>
        </div>


    </div>
  )
}

export default Widgets