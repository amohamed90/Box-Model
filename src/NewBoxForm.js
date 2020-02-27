import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
const INITIAL_STATE = {
  height: "",
  width: "",
  backgroundColor: ""
};

function NewBoxForm({ createBox }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    createBox({ ...formData, id: uuidv4() });
    setFormData(INITIAL_STATE);
  }

  return (
    <div className="NewBoxForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="height">HEIGHT</label>
        <input 
          onChange={handleChange}
          type="text"
          name="height"
          value={formData.height}
          id="height" 
          />
        <label htmlFor="width">WIDTH</label>
        <input 
          onChange={handleChange}
          type="text"
          name="width"
          value={formData.width}
          id="width" />
        <label htmlFor="backgroundColor">BACKGROUND COLOR</label>
        <input 
          onChange={handleChange}
          type="text"
          name="backgroundColor"
          value={formData.backgroundColor}
          id="backgroundColor" />
        <input type="submit" value="Create Box" />
      </form>
    </div>
  )

}

export default NewBoxForm;