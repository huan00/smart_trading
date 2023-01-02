import React from 'react'
import './social.css'

import { moneybag, google, linkdin, webull, robinhood } from './import'

const Social = () => {
  return (
    <div className="st__social section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={linkdin} alt="linkdin" />
      </div>
      <div>
        <img src={webull} alt="webull" />
      </div>
      <div>
        <img src={robinhood} alt="robinhood" />
      </div>
      <div>
        <img src={moneybag} alt="moneybag" />
      </div>
    </div>
  )
}

export default Social
