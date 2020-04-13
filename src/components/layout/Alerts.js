import React, { useContext } from 'react';
import {AlertContext} from '../../context/alert/alertContext';

const Alerts = () => {
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;

    return (
       alert !== null && (
          <div className={`alert alert-${alert.type}`}>
              <i className="fas fa-info-circle"></i>{ alert.msg}
          </div> 
       )
    )
}

export default Alerts
