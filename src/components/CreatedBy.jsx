import './CreatedBy.scss'

const CreatedBy = ({ author, image }) => {
  return (
    <div className='createdby'>
      <img src={image} alt="avatar" />
      Creation of <span className='text-white'>{author}</span>
    </div>
  )
}

export default CreatedBy