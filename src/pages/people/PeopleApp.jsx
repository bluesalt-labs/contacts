import { Routes, Route } from "react-router";
import Layout from "../../templates/Layout"
import ModelList from "../../components/ModelList/ModelList"
//import ModelShow from "../../components/ModelShow/ModelShow"

import './PeopleApp.css'

import people from '../../data/people.json'

function PeopleApp() {

  return (
    <Layout title="People">
      <Routes>
          <Route path="/contacts/people.html" element={<ModelList models={people} />} />
          {/* <Route path="/contacts/people/:id" element={<ModelShow />} /> */}
      </Routes>
    </Layout>
  )
}

export default PeopleApp
