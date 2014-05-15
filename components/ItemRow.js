/** @jsx React.DOM */

var ItemRow = React.createClass({
    render: function () {
        var name = this.props.item.stock ? this.props.item.name
                                    : <span style={{ color: 'red' }}>{this.props.item.name}</span>
        return (
            <tr className="itemRow">
                <td>{name}</td>
                <td>{this.props.item.price}</td>
            </tr>
        );
    }
});