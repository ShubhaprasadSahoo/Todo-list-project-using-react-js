import React from 'react'

const Footer = () => {
  let footerstyle={

    top:'70vh',
    position:'relative',
    width:'100%'
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerstyle}>
     <p className='text-center'> Copyright &copy; My todolist.com</p>
    </footer>
  )
}

export default Footer







