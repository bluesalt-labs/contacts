import { HashRouter, Routes, Route } from 'react-router'

// pages
import IndexPage from './src/pages/Index'
import AboutPage from './src/pages/About'
import PeopleListPage from './src/pages/People/List'
import PeopleShowPage from './src/pages/People/Show'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="people">
          <Route index element={<PeopleListPage />} />
          <Route path=":id" element={<PeopleShowPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
