import React from 'react';

const ListFooter = props => {
    return (
        <div className="list-footer">
            <p>12/05/2019</p>
            <p>{props.total} R$</p>
        </div>
    );
};

export default ListFooter;