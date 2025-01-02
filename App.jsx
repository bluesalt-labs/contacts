import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './src/templates/Layout'
import ModelList from './src/components/ModelList/ModelList'

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

const PeoplePage = () => {
  return (
    <Layout title="People">
      <h2>Welcome to the People page</h2>
      <div>
        <ModelList models={people} />
      </div>
    </Layout>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="people" element={<PeoplePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
