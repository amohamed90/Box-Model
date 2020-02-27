import React, {useState} from 'react';
import Box from './Box';

function Boxlist() {
  const[boxlist, SetBoxlist] = useState(addBox({}));
  const[boxform, setBoxForm] = useState();
  
  function addBox({width=200, height=200, backgroundColor='red'}) {
    return (
        <Box width={width} height={height} backgroundColor={backgroundColor} />
    )
  }

  return (
    <div>
      <div className="Boxlist">
        {boxlist}
      </div>
      <NewBoxForm />
    </div>

  )
}

export default Boxlist;

