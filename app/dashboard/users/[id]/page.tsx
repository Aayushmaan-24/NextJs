import React from 'react'

const UserDetails = async ({ params }: { params: Promise<{ id: string }>}) => {
    const { id } = await params
  return (
    <div className='text-4xl underline m-10'>
        Showing details for user {id}
    </div>
  )
}

export default UserDetails