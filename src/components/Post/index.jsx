export const Post = ({ category, title, description, author, date}) => {
  return (
    <div className='post mx-2'>
      <div className="img-post"></div>
      <h5>{category}</h5>
      <h3>{title}</h3>
      <p className='mt-1'>
        {description}
      </p>
      <div className='flex pt-2'>
        <div className='img-profile'></div>
        <div className='desc-profile ml-2'>
          <h6 className='color-blue'>{author}</h6>
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}
