var React = require('react');
var Table = require('./Table');
var Pagination = require('./Pagination');
var SelectField = require('./SelectField');
var SearchField = require('./SearchField');

var DataMixin = require('./DataMixin');

var DataTable = React.createClass({

  mixins: [ DataMixin ],

  render() {
    var page = this.buildPage();

    return (
      <div className={this.props.className}>
        <div className="DTTT btn-group">
            <SelectField
              id="page-menu"
              label="表示件数:"
              value={this.state.pageLength}
              options={this.props.pageLengthOptions}
              onChange={this.onPageLengthChange}
            />
        </div>
        <div className="dataTables_filter">
            <SearchField
              id="search-field"
              label="Searchk:"
              value={this.state.filterValues.globalSearch}
              onChange={this.onFilter.bind(this, 'globalSearch')}
            />

        </div>
        <Table
          className="table table-bordered no-footer"
          dataArray={page.data}
          columns={this.props.columns}
          keys={this.props.keys}
          buildRowOptions={this.props.buildRowOptions}
          sortBy={this.state.sortBy}
          onSort={this.onSort}
        />
        <div className="row DTTTFooter">
            <div className="col-sm-6">
                <div className="dataTables_info">件数：{this.state.data.length}</div>
            </div>
            <div className="col-sm-6">
                <Pagination
                  className="pagination pull-right"
                  currentPage={page.currentPage}
                  totalPages={page.totalPages}
                  onChangePage={this.onChangePage}
                />
            </div>
            {' '}

        </div>
      </div>
    );
  },
});

module.exports = DataTable;
