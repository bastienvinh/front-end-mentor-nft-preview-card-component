import './Price.scss'
import { ReactComponent as EuthereumImage } from '../images/icon-ethereum.svg'

const Price = ({ price }) => {
  return (
    <div className='price'>
      <EuthereumImage />
      {price}
      ETH
    </div>
  )
}


export default Price
