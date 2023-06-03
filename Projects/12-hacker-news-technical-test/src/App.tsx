import { lazy, Suspense } from 'react'
import { Header } from './componets/Header'
import { Route } from 'wouter'

const TopStories = lazy(() => import('./pages/TopStories'))
const Detail = lazy(() => import('./pages/Detail'))

function App () {

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path='/' component={TopStories} />
          <Route path='/article/:id' component={Detail} />
        </Suspense>
      </main>
    </>
  )
}

export default App
