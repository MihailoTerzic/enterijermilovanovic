import React from 'react'
import Hero from './hero'
import MinimalistSection from './minimalistsection'
import TimelessCharm from './timeless'
import CollectionGrid from './grid'

export default function page() {
  return (
    <div className='px-6 bg-white'>
      <Hero/>
      <MinimalistSection/>
      <TimelessCharm/>
      <CollectionGrid/>
    </div>
  )
}
