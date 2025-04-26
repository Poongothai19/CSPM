import React from 'react';

function Widget({ widget }) {
  return (
    <div className="widget">
      <div className="widget-header">{widget.name}</div>
      <div className="widget-content">
        <div>{JSON.stringify(widget.content)}</div>
      </div>
    </div>
  );
}

export default Widget;
