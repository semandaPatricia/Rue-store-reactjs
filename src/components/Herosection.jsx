import React from 'react'

const Herosection = () => {
  return (
    
    <section className="section">
        <div className="cards">
            <a href="/women" className="card card-1">
                <figure className="visual">
                    <img className="card-img" src="https://images.unsplash.com/photo-1662532577856-e8ee8b138a8b?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="woman in red pants"/>
                    <figcaption className="figcaption">Women</figcaption>
                </figure>
            </a>
            <a href="/men" className="card card-2">
                <figure className="visual">
                    <img className="card-img" src="https://images.unsplash.com/photo-1621347311151-49f945881948?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="manny"/>
                    <figcaption className="figcaption">Men</figcaption>
                </figure>
            </a>
            <a href="/teens" className="card card-3">
                <figure className="visual">
                    <img className="card-img" src="https://images.unsplash.com/photo-1569616813040-5638f8ff47d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Person teeny"/>
                    <figcaption className="figcaption">Teens</figcaption>
                </figure>
            </a>
            <a href="/kids" className="card card-4">
                <figure className="visual">
                    <img className="card-img" src="https://images.unsplash.com/photo-1627859774205-83c1279a6382?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZHMlMjBmYXNoaW9ufGVufDB8MHwwfHx8Mg%3D%3D" alt="kid in dress"/>
                    <figcaption className="figcaption">Kids</figcaption>
                </figure>
            </a>
        </div>
    </section>
  )
}

export default Herosection