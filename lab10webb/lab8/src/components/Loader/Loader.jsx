import React from 'react';
import './Loader.css';
import ClipLoader from "react-spinners/ClipLoader";

function Loader({ loading }) {

  return (
    <div className='loader'>
        <ClipLoader
          color={'orange'}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </div>
  );
}

export default Loader;