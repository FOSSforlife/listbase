import React, { useState } from 'react';
import { Grid } from 'react-spreadsheet-grid';
import './DataTable.css';


class DataTable extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            rows: props.rows,
            columns: props.columns
        };
    }

    

    render() {
        return (
            <div className="DataTable">
                <Grid
                    columns={this.state.columns}
                    rows={this.state.rows}
                    blurCurrentFocus={this.state.blurFocus}
                    getRowKey={row => row.id}
                    rowHeight={50}
                    isColumnsResizable
                    focusOnSingleClick={this.props.focusOnSingleClick}
                    disabledCellChecker={(row, columnId) => {
                        return columnId === 'age';
                    }}
                    isScrollable={this.props.isScrollable}
                />
            </div>
        )
    }
}

DataTable.defaultProps = {
    isScrollable: false,
    focusedOnClick: false
};

export default DataTable;
