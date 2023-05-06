import React from 'react'

export default function Contact(props) {

  let myStyle = {
    color: props.mode ==='dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'black':'white'
  } 

  return (
    <span >
      <h1 style={myStyle}>Our Contacts</h1>
      <h2 style={myStyle}>Mobile No.: 8885904797</h2>
      <h2 style={myStyle}>Email Id: tushar532@gmail.com</h2>
    </span>
  )
}
