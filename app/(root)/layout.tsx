import React from 'react'

const Layout = ( { children } : { children : React.ReactNode } ) => {
  return (
    <div className='m-10'>
        navbar
        {children}
    </div>
  )
}

export default Layout