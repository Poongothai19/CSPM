import React from 'react';

function AddWidgetForm({ closeForm }) {
  return (
    <div>
      <div className="overlay" onClick={closeForm}></div>
      <div className="add-widget-form">
        <h3>Add New Widget</h3>
        <div className="form-buttons">
          <button className="cancel-btn" onClick={closeForm}>Cancel</button>
          <button className="add-btn">Add Widget</button>
        </div>
      </div>
    </div>
  );
}

export default AddWidgetForm;
