import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './list.css';
import Form from './Form';
import ListItem from './ListItem';
import { Creators as ListActions } from '../store/actions/list';

class CreateList extends Component {

    addProduct = (product, list) => {
        this.props.addProduct(product, list)
    };

    render() {
        console.log(this.props);
        return (
            <div className="page-container">
                <Form addProduct={this.addProduct} />
                <div className="list-items-container">
                    {this.props.list.items.map(item =>
                        <ListItem
                            item={item}
                            toggleProduct={this.props.toggleProduct}
                            key={item.productId}
                            deleteProduct={this.props.deleteProduct}
                        />
                    )}
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    list: state.list,
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);