import React from 'react'
import './css/artistprofile.css'
import varified from '../../asset/img/icon/verified.svg'
import plays from '../../asset/img/icon/play.svg'
import followers from '../../asset/img/icon/followers.svg'
import cover from '../../asset/cover.jpg'

export default function ArtistProfile({ artistProfileData }) {
    function logElementInfo(element) {
        if (!(element instanceof HTMLElement)) {
            console.error("Please pass a valid HTML element.");
            return;
        }
    
        const elementType = element.tagName.toLowerCase();
        const fontSize = window.getComputedStyle(element).fontSize;
        const fontSizePx = parseFloat(fontSize);
        const viewportWidth = window.innerWidth;
        const fontSizePercentage = (fontSizePx / viewportWidth) * 100;
    
        console.log(`Element type: ${elementType}, Font size: ${fontSize}, Font size as percentage of viewport width: ${fontSizePercentage.toFixed(2)}%`);
    }

    logElementInfo(document.querySelector('.icon'))

  return (
    <div className="profile-div-main-artist">
        <div className="profile-image">
            <img src={ cover } alt='profile image' />
        </div>
        
    <div className='wrap-info-about'>
        <div className="wrap-info-stats">
                <div className="info">
                    <div className="wrap-name-varified">
                    <h1 className="name">{ artistProfileData.name }</h1>
                    <img className="icon" src={varified} />
                    </div>
                    <h2 className="location">{ artistProfileData.location }</h2>
                </div>
                
                <div className="stats">
                        <div>
                            <img className="icon" src={followers} />
                            <p>{ artistProfileData.likes }</p>
                        </div>

                        <div>
                            <img className='icon' src={plays} />
                            <p>{ artistProfileData.plays }</p>
                        </div>
                </div>
            </div>

            <h3>About</h3>
            <p className="about">{ artistProfileData.about }</p>
        </div>
    </div>
  )
}
