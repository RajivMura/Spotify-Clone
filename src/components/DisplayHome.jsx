import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'


export default function DisplayHome() {
  return (
    <>
      <Navbar />
      
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>

        <div className='flex overflow-auto '>
          {albumsData.map((items, index) => (<AlbumItem key={index} name={items.name} desc={items.desc} id={items.id} image={items.image} />))}
        </div>
      </div>

      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Todays biggest hits</h1>

        <div className='flex overflow-auto '>
          {songsData.map((item, index) => (<SongItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id} />))}
        </div>
      </div>
    
    </>
  )
}
