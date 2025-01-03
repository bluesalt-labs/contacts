import { Link } from 'react-router'

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

  // todo: these are specific to the user. I probably need to use this as a base component
  const title = `${model.first_name} ${model.last_name}`
  const subtitle = `${model.email} | ${model.phone}`

  return (
    <div className="transition text-gray-100 rounded px-2 py-3 my-3 border-2 border-fuchsia-900 bg-fuchsia-950 hover:shadow hover:shadow-fuchsia-500 hover:bg-fuchsia-900">
      <Link to={`${model.id}`}>
        <img className="rounded-full" src={imageUrl} alt={`${title} avatar`} />
        <br />
        <span>{title}</span>
        <br />
        <span>{subtitle}</span>
      </Link>
    </div>
  )
}
