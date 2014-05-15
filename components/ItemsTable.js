/** @jsx React.DOM */

var ItemsTable = React.createClass({
    render: function () {
        var items = this.props.items.map(function (item) {
            return <ItemRow item={item} />
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