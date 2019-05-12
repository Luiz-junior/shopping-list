import React from 'react';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import CustomCard from '../common/CustomCard';
import ListFooter from './ListFooter';
import ListItem from './ListItem';
import './list.css';

const List = props => {
    return (
        <CustomCard 
            containerClass="list-container" 
            link="/list"
            footer={<ListFooter />} 
        >
            <div>
                <p className="title">Mês</p>
                <div className="list-card-body">
                    <ListItem icon={faShoppingBasket} text="1 Item(s) restante" />
                    <ListItem icon={faCheck} text="2 Item(s) comprados" />
                </div>
            </div>
        </CustomCard>
    );
};

export default List;