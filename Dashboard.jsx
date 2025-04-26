import React, { useState } from 'react';
import dashboardData from '../data/dashboardData';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';

function Dashboard() {
  const [categories, setCategories] = useState(dashboardData.categories);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="dashboard-header">
        <h2>CNAPP Dashboard</h2>
        <div className="controls">
          <button className="add-widget-btn" onClick={() => setShowForm(true)}>
            <span>Add Widget</span> +
          </button>
          <div className="date-filter">
            <span>Last 2 days</span>
          </div>
        </div>
      </div>

      <div id="dashboard-content">
        {categories.map(category => (
          <div key={category.id} className="category">
            <div className="category-header">{category.name}</div>
            <div className="widgets-container">
              {category.widgets.map(widget => (
                <Widget key={widget.id} widget={widget} />
              ))}
              <div className="empty-widget" onClick={() => setShowForm(true)}>
                <span>+ Add Widget</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && <AddWidgetForm closeForm={() => setShowForm(false)} />}
    </div>
  );
}

export default Dashboard;
