import React, { Component, useState } from 'react';
import { Input, Select } from 'react-spreadsheet-grid';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

import DataTable from './DataTable/DataTable';
import './App.css';

const rows = [];

// FIXME: App only displays 22 rows
for (let i = 0; i < 1000; i++) {
  rows.push({
      id: i,
      firstName: 'First name ' + i,
      secondName: 'Second name ' + i,
      positionId: 3,
      tags: [],
      age: i
  });
}

class App extends Component {
    
    // const [rows, setRows] = useState([]);
    // constructor() {
        
    // }

  onFieldChange(rowId, field, value) {
    rows[rowId][field] = value;

    this.setState({
        rows: [].concat(rows),
        blurFocus: true
    });
  }

  initColumns() {
    return [
        {
            title: 'First name',
            value: (row, {focus}) => {
                return (
                    <Input
                        value={row.firstName}
                        focus={focus}
                        onChange={this.onFieldChange.bind(this, row.id, 'firstName')}
                    />
                );
            },
            id: 'firstName'
        },
        {
            title: 'Second name',
            value: (row, {focus}) => {
                return (
                    <Input
                        value={row.secondName}
                        focus={focus}
                        onChange={this.onFieldChange.bind(this, row.id, 'secondName')}
                    />
                );
            },
            id: 'secondName'
        },
        { // FIXME: Delay in updating tags display
            title: 'Tags',
            value: (row, {focus}) => {
                return (
                    <TagsInput
                        value={row.tags} 
                        inputValue={row.tag}
                        focus={focus}
                        onChange={this.onFieldChange.bind(this, row.id, 'tags')} 
                        onChangeInput={this.onFieldChange.bind(this, row.id, 'tags')} 
                      />
                    // <Select
                    //     selectedId={row.positionId}
                    //     isOpen={focus}
                    //     items={positions}
                    //     onChange={this.onFieldChange.bind(this, row.id, 'positionId')}
                    // />
                );
            },
            id: 'position'
        },
        {
            title: 'Position',
            value: (row, {focus}) => {
                return (
                    <Input
                        value={row.age}
                        focus={focus}
                        onChange={this.onFieldChange.bind(this, row.id, 'age')}
                    />
                );
            },
            id: 'age'
        }
    ];
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="sidebar"></div>
        <div className="main-content"></div>
        <DataTable rows={rows} columns={this.initColumns()} isScrollable></DataTable>
      </div>
    );
  }
}

export default App;
