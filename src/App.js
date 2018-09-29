import React from 'react';
import './App.css';
import StudentInfo from './StudentInfo/StudentInfo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StudentInfo students={this.props.students}/>
      </div>
    );
  }
}

export default App;
