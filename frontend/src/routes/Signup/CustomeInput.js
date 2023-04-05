import React from 'react'

const CustomeInput = ({myStyle}) => {
  return (
    <div style={[{background:'red'},...myStyle]}>CustomeInput</div>
  )
}

export default CustomeInput