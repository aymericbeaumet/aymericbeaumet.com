import React from 'react'
import Timer from '../images/timer.svg'
import classes from './duration.module.scss'

export default function Duration({ timeToRead, timeToWatch } = {}) {
  if (typeof timeToWatch === 'number') {
    return (
      <time className={classes.Duration} dateTime={`${timeToWatch}m`}>
        <Timer />
        {`${timeToWatch} min watch`}
      </time>
    )
  }
  if (typeof timeToRead === 'number') {
    return (
      <time className={classes.Duration} dateTime={`${timeToRead}m`}>
        <Timer />
        {`${timeToRead} min read`}
      </time>
    )
  }
  return null
}
