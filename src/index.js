import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = (props) => {
  if (props.type === 'primary') {
    return (
      <button {...props} className={styles.buttonPrimary}>
        {props.text}
      </button>
    )
  }
  if (props.type === 'text') {
    return (
      <button {...props} className={styles.buttonText}>
        {props.text}
      </button>
    )
  }
  if (props.type === 'link') {
    return (
      <button {...props} className={styles.buttonLink}>
        {props.text}
      </button>
    )
  }
  if (props.type === 'dashed') {
    return (
      <button {...props} className={styles.buttonDashed}>
        {props.text}
      </button>
    )
  } else {
    return (
      <button {...props} className={styles.button}>
        {props.text}
      </button>
    )
  }
}
