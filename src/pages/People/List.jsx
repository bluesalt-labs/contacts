import React, { useContext } from 'react'
import Layout from '../../templates/Layout'
import ModelList from '../../components/ModelList'

import { PeopleContext, PeopleProvider } from '../../contexts/PeopleContext'

const ListPageContent = () => {
  const { people } = useContext(PeopleContext)

  return (
    <>
      <ModelList models={people ?? []} />
    </>
  )
}

function PeopleListPage() {

  return (
    <PeopleProvider>
      <Layout title="People">
        <ListPageContent />
      </Layout>
    </PeopleProvider>
  )
}

export default PeopleListPage
