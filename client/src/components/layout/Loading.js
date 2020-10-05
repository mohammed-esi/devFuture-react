import React, { Fragment } from 'react';

const Loading = () => {
  return (
    <Fragment>
      <div className='spinner-border text-darken-green' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </Fragment>
  );
};

export default Loading;
