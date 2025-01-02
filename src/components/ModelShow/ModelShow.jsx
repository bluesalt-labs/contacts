import React from 'react'
import './ModelShow.css'

type ModelShowProps = {
model?: Array<string|number|null>;
};

const ModelShow: React.FC<ModelShowProps> = ({ model }) => {

  return (
    <>
      <code><pre>
        { JSON.stringify(model) }
      </pre></code>
    </>
  )
}

export default ModelShow
