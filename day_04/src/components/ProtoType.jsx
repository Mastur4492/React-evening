import React from 'react'
import PropTypes from 'prop-types'

const ProtoType = ({ username, salary }) => {
  return (
    <div>
        <h1>username : {username}</h1>
        <h1>salary : {salary}</h1>
    </div>
  )
}

ProtoType.propTypes = {
    username: PropTypes.string,
    salary: PropTypes.number
}

ProtoType.defaultProps = {
    username: "MAstur",
    salary: 1111
};

export default ProtoType
