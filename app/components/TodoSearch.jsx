var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted,searchText);
  },
  render:function () {
    return (
      <div>

        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
          show Completed todos
        </div>
      </div>

    );
  }
});
module.exports=TodoSearch;