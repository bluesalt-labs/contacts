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

function ModelListItem({ model }) {

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <code><pre>
          { JSON.stringify(model, null, 2) }
        </pre></code>
      </div>
    </>
  )
}
