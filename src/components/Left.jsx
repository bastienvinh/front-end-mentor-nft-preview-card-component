import { ReactComponent as ClockImage } from '../images/icon-clock.svg';

const Left = ({ days }) => {
  return (
    <div className="left">
      <ClockImage /> {days} days left
    </div>
  )
}

export default Left