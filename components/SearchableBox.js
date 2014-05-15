/** @jsx React.DOM */

var SearchableBox = React.createClass({
    render: function () {
        return (
            <div className="searchableBox">
                <SearchBar />
                <ItemsTable items={this.props.items} />
            </div>
        );
    }
});