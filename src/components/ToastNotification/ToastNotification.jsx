// ToastNotification.js
import React, { useEffect, useState } from 'react';
import styles from './ToastNotification.module.css';

const ToastNotification = ({ duration = 3000, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          onClose();
          return 0;
        }
        return prev - (100 / (duration / 100));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, onClose]);

  return (
    <div className={styles.toastContainer}>
      <div className={styles.toastMessage}>
        this product has been added to the cart!
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ToastNotification;
