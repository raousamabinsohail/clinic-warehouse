import React from "react";

export default class Modal extends React.Component {
    
    render() {
        const { show, onClose, children } = this.props;
    
        if (!show) {
          return null;
        }
    
        return (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={onClose}>
                &times;
              </span>
              {children}
            </div>
          </div>
        );
      }
}