import './index.css'

const CommentItem = props => {
  const {commentItem, toggleLikeButton, onDeleteComment} = props

  const {name, comment, time, isLike, id} = commentItem

  const firstLetter = name[0]

  const likedButton = isLike ? 'liked-button' : ''

  const imageLiked = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onToggleMethod = () => {
    toggleLikeButton(id)
  }

  const onDeleteUser = () => {
    onDeleteComment(id)
  }

  return (
    <li className="list-card-container">
      <div className="name-card">
        <p className="first-letter">{firstLetter}</p>
        <p className="name-para">{name}</p>
        <p className="time">{time}</p>
      </div>
      <p className="comment-paragraph">{comment}</p>
      <div className="like-delete-container">
        <button className="like-button" type="button" onClick={onToggleMethod}>
          <img src={imageLiked} alt="like" className="like-button-card" />
          <p className={`like-para ${likedButton}`}>Like</p>
        </button>
        <button className="delete-btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            className="delete-img"
            onClick={onDeleteUser}
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
