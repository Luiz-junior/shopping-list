import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as FormActions } from '../store/actions/form';

const units = ['kilo(s)', 'litro(s)', 'unidade(s)'];

class Form extends Component {

    state = {
        list: '',
        product: '',
        quantity: '',
        unity: '',
        price: '',
        showErrors: false,
    };

    componentDidUpdate(prevProps) {
        if (this.props.form.action === 'update' &&
            prevProps.form.productToUpdate !== this.props.form.productToUpdate) {

            const { product, quantity, unity, price } = this.props.form.productToUpdate;

            this.setState({
                product,
                quantity,
                unity,
                price,
                showErrors: false,
            });
        }
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = () => {
        const { list, product, quantity, unity, price } = this.state;
        if (!list || !product || !quantity || !unity) {
            this.setState({ showErrors: true });
        } else {
            this.props.addProduct({ product, quantity, unity, price }, list);

            this.setState({
                product: '',
                quantity: '',
                unity: '',
                price: '',
                showErrors: false,
            })
        }
    };

    render() {
        return (
            <form className="form-container">
                <div className="form-row">
                    <TextField
                        label="Lista"
                        value={this.state.list}
                        onChange={this.onChange}
                        required
                        name="list"
                        error={!this.state.list && this.state.showErrors}
                    />
                    <Button onClick={this.onSubmit} variant="outlined" color="secondary">Salvar</Button>
                </div>

                <div className="form-row">
                    <TextField
                        label="Produto"
                        value={this.state.product}
                        onChange={this.onChange}
                        required
                        name="product"
                        error={!this.state.list && this.state.showErrors}
                    />

                    <TextField
                        label="Quantidade"
                        value={this.state.quantity}
                        onChange={this.onChange}
                        required
                        name="quantity"
                        error={!this.state.list && this.state.showErrors}
                    />

                    <TextField
                        select
                        label="Unidade"
                        value={this.state.unity}
                        onChange={this.onChange}
                        required
                        name="unity"
                        error={!this.state.list && this.state.showErrors}
                    >
                        {
                            units.map(option => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))
                        }
                    </TextField>

                    <TextField
                        label="Preço"
                        value={this.state.price}
                        onChange={this.onChange}
                        name="price"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>
                        }}
                    />
                </div>

            </form>
        );
    }

};

const mapStateToProps = state => ({
    form: state.form,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(FormActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);