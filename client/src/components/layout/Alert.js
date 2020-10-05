import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

export default function Alert() {
  const alertContext = useContext(AlertContext);

  const { alerts } = alertContext;
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div
        key={alert.id}
        className={`alert alert-${alert.type} alert-dismissible mt-4`}
      >
        <button className='close' type='button' data-dismiss='alert'>
          <span>&times;</span>
        </button>
        <strong>
          <i className='fas fa-exclamation-circle mr-2'></i>
        </strong>
        {alert.msg}
      </div>
    ))
  );
}
