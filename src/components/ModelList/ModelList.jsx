//import React from 'react'
import { Link } from 'react-router'
import './ModelList.css'

//type ModelListProps = {
//models?: Array<string|number|null>;
//};

//const ModelList: React.FC<ModelListProps> = (props) => {
function ModelList({ models }) {

    return (
      <>
      {(models ?? []).map((model, key) =>
        <ModelListItem model={model} key={key} />
      )}
      </>
    )
}

export default ModelList

function ModelListItem({ model }) {
  const imageUrl = `${model.avatar}`

  const title = `${model.first_name} ${model.last_name}`
  const subtitle = `${model.email} | ${model.phone}`

  return (
    <div className="model-list-container">
      <Link to={`${model.id}`}>
        <img src={imageUrl} alt={`${title} avatar`} />
        <br />
        <span>{title}</span>
        <br />
        <span>{subtitle}</span>

        {/* <code><pre>
          { JSON.stringify(model, null, 2) }
        </pre></code>
          */}
      </Link>

    </div>
  )
}
