import Layout from "../../templates/Layout"
import ModelList from "../../components/ModelList/ModelList"

import './PeopleApp.css'

import people from '../../data/people.json'

function PeopleApp() {

  return (
    <Layout title="People">
        <span>Stuff and things</span>
        <ModelList models={people} />
    </Layout>
  )
}

export default PeopleApp
