import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const units = ['kg', 'lt', 'un'];

const Form = props => {
    return (
        <form className="form-container">
            <div className="form-row">
                <TextField
                    label="Lista"
                    value={''}
                    onChange={() => { }}
                    required
                    name="list"
                />
                <Button variant="outlined" color="secondary">Adicionar</Button>
            </div>

            <div className="form-row">
                <TextField
                    label="Produto"
                    value={''}
                    onChange={() => { }}
                    required
                    name="product"
                />

                <TextField
                    label="Quantidade"
                    value={''}
                    onChange={() => { }}
                    required
                    name="quantity"
                />

                <TextField
                    select
                    label="Unidade"
                    value={''}
                    onChange={() => { }}
                    required
                    name="unity"
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
                    value={''}
                    onChange={() => { }}
                    name="price"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">R$</InputAdornment>
                    }}
                />
            </div>

        </form>
    );
};

export default Form;