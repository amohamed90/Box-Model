import React from 'react';

function Box(props) {
  let {width, height, backgroundColor, id, removeBox} = props;
  return (
    <div className='Box' style={{width: `${width}px`, height: `${height}px`, backgroundColor: backgroundColor}}>
      <button style={{ cursor: "pointer" }} onClick={() => removeBox(id)}>X</button>
    </div>
  )
}

export default Box;