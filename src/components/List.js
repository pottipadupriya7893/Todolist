import React, { Component } from 'react';
import Item from './Item';

export default class List extends Component {
  render() {
    return (
      <table>
        
        <tbody>
          {this.props.tasks.map((task, index) => (
            <Item
              key={index}
              taskItem={task}
              id={index}
              deleteTask={this.props.deleteTask}
              editTask={this.props.editTask}
              toggleTask={this.props.toggleTask}
            />
          ))}

        </tbody>
        
      </table>
    );
  }
}
