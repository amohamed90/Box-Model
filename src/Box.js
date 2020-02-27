import React from 'react';

function Box(props) {
  let {width, height, backgroundColor} = props
  return (
    <div className='Box' style={{width: width, height: height, backgroundColor: backgroundColor}}>
      <button>X</button>
    </div>
  )
}

export default Box;