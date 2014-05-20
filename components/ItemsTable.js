/** @jsx React.DOM */

var ItemsTable = React.createClass({
    renderItem: function (item) {
        return <ItemRow item={item} />;
    },
    render: function () {
        var filterText = this.props.filterText.toLowerCase();
        var inStock = this.props.inStock;
        var items = this.props.items.map(function (item) {
            var show = true;
            if (inStock &&
                !item.stock) show = false;
            if (filterText &&
                item.name.toLowerCase().indexOf(filterText) === -1) show = false;

            if (show) return this.renderItem(item);

        }.bind(this));
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