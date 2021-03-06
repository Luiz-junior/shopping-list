import React from 'react';

import CustomCard from '../common/CustomCard';

const NewList  = props => {
    return (
        <CustomCard link="/list" containerClass="new-list-container">
            <div>
                <p className="title">Adicionar novas Listas</p>
            </div>
         </CustomCard>
    );
};

export default NewList;