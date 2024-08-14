import React from 'react'
import './css/audioplayer.css'

export default function AudioPlayer({ SongData }) {
  return (
    //  audio player component
    <div class="audioplayer-div-main-song">
       <div class="ap-div-cover">
          <img class="ap-img-cover" src={ SongData.cover } alt="cover" />
          <img class="ap-img-playpauseicon" src="./img/icon/play.svg" alt="play-pause" />
       </div>

       <div class="ap-div-info">
          <h4 class="artist">{ SongData.artist }</h4>
          <p class="name">{ SongData.title }</p>
       </div>
    </div>
  )
}
