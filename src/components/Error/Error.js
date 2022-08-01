import React from 'react';
import './Error.css';
import Header from '../Header/Header';

const Error = () => {
  return (
    <>
      <Header />
      <div className='error-messaging'>
        <h4>Thank you for visiting our website.</h4>
        <p>You've found a page that we cannot find.</p>
        <p>Please return to our 🏡 home page using the Treezy link above.</p>
      </div>
    </>
  )
}

export default Error;