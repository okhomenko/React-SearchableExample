/** @jsx React.DOM */

var SearchBar = React.createClass({
    handleChange: function () {
        var inStock = this.refs.inStock.getDOMNode().checked;
        var filterText = this.refs.filterText.getDOMNode().value.trim();
        this.props.onUserInput({
            inStock: inStock,
            filterText: filterText
        });
    },
    render: function () {
        return (
            <form className="searchBar">
                <input type="text" placeholder="Search..."
                       ref="filterText"
                       value={this.props.filterText}
                       onChange={this.handleChange} />
                <br />
                <label>
                    <input type="checkbox"
                           ref="inStock"
                           checked={this.props.inStock}
                           onChange={this.handleChange} />
                    Only show products in stock
                </label>
            </form>
        );
    }
});