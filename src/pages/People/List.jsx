import Layout from '../../templates/Layout'
import ModelList from '../../components/ModelList'

// todo: don't retrieve this directly.
import people from '../../data/people.json'

const PeopleListPage = () => {
  return (
    <Layout title="People">
      <h2>Welcome to the People list page</h2>
      <hr />
      <div>
        <ModelList models={people} />
      </div>
    </Layout>
  )
}

export default PeopleListPage
