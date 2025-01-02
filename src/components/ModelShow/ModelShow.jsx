
function ModelShow({ model }) {

  return (
    <>
      <code><pre>
        { JSON.stringify(model, null, 2) }
      </pre></code>
    </>
  )
}

export default ModelShow
