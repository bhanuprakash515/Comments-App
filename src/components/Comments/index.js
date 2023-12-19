import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentLists: [],
    name: '',
    comment: '',
  }

  onChangeYourName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeYourComment = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const addNewComment = {
      id: uuidv4(),
      name,
      comment,
      time: formatDistanceToNow(new Date()),
      isLike: false,
    }
    this.setState(prevState => ({
      commentLists: [...prevState.commentLists, addNewComment],
      name: '',
      comment: '',
    }))
  }

  toggleLikeButton = id => {
    this.setState(prevState => ({
      commentLists: prevState.commentLists.map(eachUser => {
        if (id === eachUser.id) {
          return {...eachUser, isLike: !eachUser.isLike}
        }
        return eachUser
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentLists} = this.state
    const filteredComments = commentLists.filter(each => each.id !== id)
    this.setState({
      commentLists: filteredComments,
    })
  }

  render() {
    const {name, comment, commentLists} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <form className="form-card" onSubmit={this.onAddComment}>
            <h1 className="heading">Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              placeholder="Your Name"
              className="your-input"
              onChange={this.onChangeYourName}
              value={name}
            />
            <textarea
              placeholder="Your Comment"
              className="comment-input"
              onChange={this.onChangeYourComment}
              value={comment}
            />
            <button type="submit" className="button" onClick={this.onIncrement}>
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-img"
          />
        </div>
        <hr className="line-break" />
        <div className="last-container">
          <div className="comments-cont">
            <p className="para-count">{commentLists.length}</p>
            <p className="para">Comments</p>
          </div>
          <ul className="list-container">
            {commentLists.map(eachComment => (
              <CommentItem
                commentItem={eachComment}
                key={eachComment.id}
                toggleLikeButton={this.toggleLikeButton}
                onDeleteComment={this.onDeleteComment}
                initialContainerBackgroundClassNames={
                  this.initialContainerBackgroundClassNames
                }
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
