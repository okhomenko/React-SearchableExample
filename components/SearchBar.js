/** @jsx React.DOM */

var SearchBar = React.createClass({
    render: function () {
        return (
            <form className="searchBar">
                <input type="text" placeholder="Search..." />
                <br />
                <label>
                    <input type="checkbox" />
                    Only show products in stock
                </label>
            </form>
        );
    }
});