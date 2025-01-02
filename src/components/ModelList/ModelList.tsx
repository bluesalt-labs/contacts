//import React from 'react'
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


const modelListContainerStyle = {
  textAlign: "left",
  border: "2px solid #4A006A",
  background: "rgba(200, 0, 220, 0.25)",
  padding: "6px 12px",
  marginTop: "12px",
  marginBottom: "12px",
  cursor: "pointer"
}

function ModelListItem({ model }) {
  const imageUrl = `${model.avatar}`

  const title = `${model.first_name} ${model.last_name}`
  const subtitle = `${model.email} | ${model.phone}`

  const goToProfile = () => {
    window.location.href =`/people/${model.id}/`
  }


  return (
    <div style={modelListContainerStyle} onClick={goToProfile}>
      <div style={{ display: "flex" }}>

      </div>

      <img src={imageUrl} alt={`${title} avatar`} />
      <br />
      <span>{title}</span>
      <br />
      <span>{subtitle}</span>

      {/* <code><pre>
        { JSON.stringify(model, null, 2) }
      </pre></code>
        */}
    </div>
  )
}
