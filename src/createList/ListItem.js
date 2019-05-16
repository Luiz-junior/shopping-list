import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import ListItemFooter from './ListItemFooter';
import CustomCard from '../common/CustomCard';

const ListItem = ({ item }) => {    
    return (
        <CustomCard
            link="#"
            containerClass="list-item"
            image="http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg"
            footer={<ListItemFooter total={item.total} />}
        >
            <div>
                <div className="list-item-header">
                    <Typography variant="subtitle1" component="h2">{item.product}</Typography>
                    <Checkbox />
                </div>
                <Typography>{item.quantity} {item.unity}</Typography>
                <Typography>R$ {item.price}</Typography>
            </div>
        </CustomCard>
    );
};

export default ListItem;

