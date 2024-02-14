import './index.css'

const CountriesVisitList = props => {
  const {eachDetails, sendCountryId} = props
  const {id, name, isVisited} = eachDetails

  const bgColBtn = isVisited ? 'btn1' : null
  const textOf = isVisited ? 'Visited' : 'Visit'
  const clickCountry = () => {
    sendCountryId({id})
  }

  return (
    <li className="li-list">
      <p className="para"> {name}</p>
      {isVisited ? (
        <p className="para2"> {textOf} </p>
      ) : (
        <button
          type="button"
          className={`${bgColBtn} btn-visit`}
          onClick={clickCountry}
          disabled={isVisited}
        >
          {textOf}
        </button>
      )}
    </li>
  )
}

export default CountriesVisitList
