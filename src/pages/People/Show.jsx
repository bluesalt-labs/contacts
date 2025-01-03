import { useParams } from 'react-router'
import Layout from '../../templates/Layout'
import ModelShow from '../../components/ModelShow'

// todo: don't retrieve this directly.
import people from '../../data/people.json'

const PeopleShowPage = () => {
  let { id } = useParams();

  // Retrieve individual person data by id from the people json array.
  const personData = (people ?? []).filter(p => p?.id === parseInt(id))[0] ?? []

  const person = {
    id, ...personData
  };

  return (
    <Layout title="Person">
      <span>This is the person show page</span>
      <ModelShow model={person} />
    </Layout>
  )
}

export default PeopleShowPage
