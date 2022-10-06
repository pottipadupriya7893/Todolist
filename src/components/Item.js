import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem.task,
      isEditing: false,
    };
  }
  setEditingState = (isEditing) => {
    this.setState({ isEditing: isEditing });
  };
  toggleTask = () => {
    this.props.toggleTask(this.props.id);
  };
  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
 
            
  };
  render() {
    return (
      <tr>
        {this.state.isEditing ? (
          <>  </>
        ) : (
          <>
            <td className="task" onClick={this.toggleTask}>
          
              <span
                className={
                  this.props.taskItem.isCompleted
                    ? 'completed'
                    : 'not-completed'
                }
              >
                {this.props.taskItem.task}
              </span>
            </td>
            <td>
          
         <Popup
    trigger={<button className="edit"
    onClick={() => this.setEditingState(true)}>Edit </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        {/* <button className="close" onClick={close}>
          &times;
        </button> */}

        <div className="content">
        
          <form onSubmit={this.handleSubmit}>
                <input
                  value={this.state.task}
                  onChange={this.handleChange}
                  autoFocus
                />
              </form>
        </div>
        <div className="actions">
       
        <button

className="save"

onClick={this.handleSubmit}

>

<button

className="save"

onClick={() => {

  close();          

}}

>

</button>

OK

</button>
         
          <button
            className="close"
            onClick={() => {
              
              close();
            }}
          >
            close 
          </button>
        </div>
      </div>
    )}
  </Popup> 
  
              {/* <button
                className="edit"
                onClick={() => this.setEditingState(true)}
              >
                Edit
              </button> */}
              <button className="delete" onClick={this.deleteTask}>
                Delete
              </button>
            </td>
          </>
        )}
      </tr>
      
    );
    
  }
  
}
 