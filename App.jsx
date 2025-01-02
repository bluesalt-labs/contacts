import { useParams, BrowserRouter, Routes, Route } from 'react-router'
import Layout from './src/templates/Layout'
import ModelList from './src/components/ModelList/ModelList'
import ModelShow from './src/components/ModelShow/ModelShow'

import people from './src/data/people.json'

const IndexPage = () => {
  return (
    <Layout title="Contacts">
      <h2>Welcome to the Contacts App</h2>
      <div>Hi there.</div>
    </Layout>
  )
}

const AboutPage = () => {
  return (
    <Layout title="About">
      <h2>Welcome to the about page</h2>
      <div>Here be  content about this application</div>
    </Layout>
  )
}

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

const PersonShowPage = () => {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="contacts">
          <Route index element={<IndexPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="people">
            <Route index element={<PeopleListPage />} />
            <Route path=":id" element={<PersonShowPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
