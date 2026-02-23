import React from 'react'

const Navbar = () => {

  const checkClicked = () => {
    console.log("Clicked called")
  }

  return (
    <div className="flex justify-between">
        <div className="m-2 p-4 w bg-cyan-100 text-center rounded-full uppercase tracking-wider">Ebixcash</div>
        <div className="flex tracking-wider">
            <button className="my-2 mx-1 p-3 w bg-cyan-100 text-center rounded-3xl place-content-center text-sm">Home</button>
            <button className="my-2 mx-1 p-3 w bg-cyan-100 text-center rounded-3xl place-content-center text-sm">About</button>
            <button className="my-2 mx-1 p-3 w bg-cyan-100 text-center rounded-3xl place-content-center text-sm">Career</button>
            <button className="my-2 mx-1 p-3 w bg-cyan-100 text-center rounded-3xl place-content-center text-sm">ContactUs</button>
            <button onClick={ checkClicked } className="my-2 mx-1 p-3 w bg-cyan-100 text-center rounded-3xl place-content-center text-sm">Query</button>
            <button className="my-2 mx-1 p-3 w bg-cyan-100 text-center rounded-3xl place-content-center text-sm">Account</button>
            <button className="my-2 mx-1 p-3 w bg-cyan-100 text-center rounded-3xl place-content-center text-sm">Login/SignUp</button>
        </div>
    </div>
  )
}

export default Navbar
