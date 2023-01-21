import './Card.scss'

import { ReactComponent as IconView } from '../images/icon-view.svg';

import ImageEquilibrium from '../images/image-equilibrium.jpg'
import ImageAvatar from '../images/image-avatar.png'

import Price from './Price'
import Left from './Left'
import CreatedBy from './CreatedBy'

const Card = () => {
  return (
    // 350 x 600
    <div className='card'>
      <div className='image'>
        <img src={ImageEquilibrium} alt="image-equilibrium" />
        <IconView />
      </div>
      <p className='title'>Equilibrium #3429</p>
      <p className='description'>Our equilibrium collection promotes balance and calm.</p>
      <div className='line-1'>
        <Price price={0.041} />
        <Left days={3} />
      </div>
      <CreatedBy image={ImageAvatar} author="Jules Wyvern" />
    </div>
  )
}

export default Card