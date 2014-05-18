/** @jsx React.DOM */

var ItemsTable = React.createClass({
    render: function () {
        var filterText = this.props.filterText;
        var inStock = this.props.inStock;
        var items = this.props.items.map(function (item) {
            <ItemRow item={item} />
        });
        return (
            <table className="itemsTable">
                <thead>
                    <HeaderRow />
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        );
    }
});