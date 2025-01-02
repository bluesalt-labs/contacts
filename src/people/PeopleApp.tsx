import Layout from "../shared/templates/Layout";
import './PeopleApp.css'

function PeopleApp() {
  return (
    <Layout title="People">
      <div>Here be peopley content</div>
      {/* todo: is there a way to store these routes in one place so I don't have to hard code them? */}
      <h2>Welcome to the people page</h2>
      <a href="/">Home</a>
    </Layout>
  )
}

export default PeopleApp
