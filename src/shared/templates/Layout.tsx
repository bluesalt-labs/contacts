import React from 'react'
import './Layout.css'

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      {!title ? null : <h1>{title}</h1>}

    {/* todo: is there a way to store these routes in one place so I don't have to hard code them? */}
      <div className="card">
        <a href="/">Home</a>
        |
        <a href="/about/">About</a>
        |
        <a href="/people/">People</a>
        <br />
      </div>
      {!children ? null :
        <div className="card">
          {children}
        </div>
      }
    </>
  )
}

export default Layout
