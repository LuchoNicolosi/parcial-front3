import React from 'react';
import styles from '../../styles/Card.module.css';
const Card = ({ data }) => {
  return (
    <div className={styles.container}>
      <h2>¡Felicidades {data.userName}, te has registrado!</h2>
      <h4>
        Logueate con el email {data.email} para acceder a nuestros servicios!
      </h4>
      <button>Loguearse</button>
    </div>
  );
};

export default Card;
