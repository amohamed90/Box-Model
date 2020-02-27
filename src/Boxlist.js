import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function Boxlist() {
  const [boxlist, setBoxlist] = useState([]);
  const add = boxObj => setBoxlist(boxlist => [...boxlist, boxObj]);
  console.log(boxlist)
  const boxComponents = boxlist.map(box => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width} 
      height={box.height} 
      backgroundColor={box.backgroundColor}
    />
    )
  )

  return (
    <div>
      <div className="Boxlist">
        {boxComponents}
      </div>
      <NewBoxForm createBox={add}/>
    </div>

  )
}
export default Boxlist;

