/* eslint-disable jsx-a11y/control-has-associated-label */
import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const PlaylistItem = props => {
  const {trackItem, onClickDltBtn} = props

  const {imageUrl, name, genre, duration, id} = trackItem

  const onClickDelete = () => {
    onClickDltBtn(id)
  }

  return (
    <li className="track-item">
      <div className="img-and-details-card">
        <img src={imageUrl} alt="track" className="track-img" />
        <div className="name-genre-card">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-and-btn-card">
        <p className="duration">{duration}</p>
        <button onClick={onClickDelete} type="button" className="dlt-btn">
          <AiOutlineDelete className="dlt-icon" />
        </button>
      </div>
    </li>
  )
}

export default PlaylistItem
