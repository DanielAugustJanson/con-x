import React from 'react'
import PropTypes from 'prop-types'
import Layout from './LayoutGenerator'




const Test = props => {

    const gameLayout = new Layout(6,6,3);
    const gamefield = gameLayout.generateLayout();





  return (
    <div>{gamefield}</div>
  )
}

Test.propTypes = {}

export default Test