import React from 'react'
import styles from '../Button/Button.module.css'
const Button = ({props}) => {
  return (
    <button className={styles.button}>{props}</button>
  )
}

export default Button