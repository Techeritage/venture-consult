import Header1 from '@/components/Header1'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <Header1 />
      {children}
    </div>
  )
}

export default layout
