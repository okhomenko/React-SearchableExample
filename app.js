/** @jsx React.DOM */

var data = [
    { name: 'Football', price: 20, stock: false, category: 'Feet' },
    { name: 'Basketball', price: 25, stock: true, category: 'Arms' },
    { name: 'Soccer', price: 30, stock: true, category: 'Feet' },
    { name: 'Rugby', price: 111, stock: false, category: 'Arms' },
    { name: 'Tennis', price: 10, stock: true, category: 'Arms' }
];

React.renderComponent(
    <SearchableBox items={data} />,
    document.querySelector('.container')
);