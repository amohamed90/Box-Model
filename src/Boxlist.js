import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function Boxlist() {
  const [boxlist, setBoxlist] = useState([]);
  const add = boxObj => setBoxlist(boxlist => [...boxlist, boxObj]);
  const remove = function(id) {
    setBoxlist(boxlist => boxlist.filter(box => box.id !== id));
  };
  const boxComponents = boxlist.map(box => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width} 
      height={box.height} 
      backgroundColor={box.backgroundColor} 
      removeBox={remove}
    />
    )
  )

  return (
    <div>
      <div className="Boxlist" data-testid="Boxlist">
        {boxComponents}
      </div>
      <NewBoxForm createBox={add}/>
    </div>

  )
}
export default Boxlist;

