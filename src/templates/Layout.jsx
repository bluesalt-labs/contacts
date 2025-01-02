import { Link } from 'react-router'

// todo: add a header and footer element to this page.
// todo: update the title so it's closer to the header and not in the middle of the page.
//
function Layout({ children, title }) {
  return (
    <main className="container mx-auto">
      {!title ? null : <h1>{title}</h1>}

      {/* todo: is there a way to store these routes in one place so I don't have to hard-code them? */}
      <div className="card">
        <Link to="/">Home</Link>
        |
        <Link to="/about">About</Link>
        |
        <Link to="/people">People</Link>
        <br />
      </div>
      {!children ? null :
        <div className="card">
          {children}
        </div>
      }
    </main>
  )
}

export default Layout
