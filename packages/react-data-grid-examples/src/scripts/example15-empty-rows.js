const ReactDataGrid = require('react-data-grid');
const exampleWrapper = require('../components/exampleWrapper');
const React = require('react');

const EmptyRowsView = React.createClass({
  render() {
    return (<div>Nothing to show</div>);
  }
});

const Example = React.createClass({
  getInitialState() {
    this._rows = [];
    this._columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' },
      { key: 'count', name: 'Count' }];

    return null;
  },

  rowGetter() {
    return _rows[i];
  },

  render() {
    return  (
      <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this._rows.length}
        minHeight={500}
        emptyRowsView={EmptyRowsView} />);
  }
});

module.exports = exampleWrapper({
  WrappedComponent: Example,
  exampleName: 'Empty rows grid',
  exampleDescription: 'A grid with a empty rows view',
  examplePath: './scripts/example15-empty-rows.js',
  examplePlaygroundLink: 'https://jsfiddle.net/f6mbnb8z/3/'
});
