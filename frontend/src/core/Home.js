import React from 'react'
// Custom Imports
import Base from './Base';

import { API } from '../backend';

export default function Home() {
  console.log(API);
  return (
    <Base title="ONLINE BOOK STORE" description="AN AMAZING PLACE TO BUY BOOKS">
      <h1>HELLO FRONTEND</h1>
      <div className="row">
        <div className="col-4">
          <button className="mx-auto my-auto btn btn-primary">Hello</button>
        </div>
        <div className="col-4">
          <button className="mx-auto my-auto btn btn-primary">Hello</button>
        </div>
        <div className="col-4">
          <button className="mx-auto my-auto btn btn-primary">Hello</button>
        </div>
      </div>
    </Base>
  )
}
