import React from 'react'

export default function User({ name, city, street, phone }) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{city}</h2>
      <h2>{street}</h2>
      <h2>{phone}</h2>
      <hr />
    </div>
  )
}
