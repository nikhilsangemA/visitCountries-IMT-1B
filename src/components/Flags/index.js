import './index.css'

const Flags = props => {
  const {eachImgName, receiveId} = props

  const {id, imageUrl, name} = eachImgName

  const retriveFlag = () => {
    receiveId(id)
  }

  return (
    <li className="li-flag">
      <img src={imageUrl} alt="thumbnail" className="img-edit" />
      <div className="para-btn-flag">
        <p>{name}</p>
        <button className="btn-flag-edit" type="button" onClick={retriveFlag}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default Flags
