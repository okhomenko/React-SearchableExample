/** @jsx React.DOM */

var SearchableBox = React.createClass({
    getInitialState: function() {
        return {
            filterText: "",
            inStock: true
        }
    },
    handleUserInput: function(opts) {
        console.log(opts);
        this.setState(opts);
    },
    render: function () {
        return (
            <div className="searchableBox">
                <SearchBar
                    inStock={this.state.inStock}
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput} />
                <ItemsTable
                    items={this.props.items}
                    filterText={this.state.filterText}
                    inStock={this.state.inStock}
                />
            </div>
        );
    }
});