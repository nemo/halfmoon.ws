import React from 'react';
import styles from './container.module.css'

export default ({ children, className }) => (
  <div className={`${styles.container} ${className || ''}`}>{children}</div>
)
