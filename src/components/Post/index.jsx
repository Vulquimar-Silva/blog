import React from 'react'

export const Post = () => {
  return (
    <div className='post mx-2'>
      <div className="img-post"></div>
      <h5>Tecnologia</h5>
      <h3>O guia definitivo do Blog</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Non est ipsum, repudiandae cum corporis dolores eaque,
        id ratione nesciunt dicta in maxime sint nobis! Dolore quae ut iusto nulla! Sit.
      </p>
      <div className='flex pt-2'>
        <div className='img-profile'></div>
        <div className='desc-profile ml-2'>
          <h6 className='color-blue'>Vulquimar Silva</h6>
          <p>Aug 12, 2021 - 10 min read</p>
        </div>
      </div>
    </div>
  )
}
