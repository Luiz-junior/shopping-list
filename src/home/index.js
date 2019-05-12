import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import './home.css';
import CustomCard from '../common/CustomCard';

const Home = props => {
    return (
        <div className="page-container">
            <CustomCard containerClass="new-list-container">
                <div>
                    <p className="title">Adicionar novas Listas</p>
                </div>
            </CustomCard>

            <CustomCard 
                containerClass="list-container" 
                footer={
                    <div className="list-footer">
                        <p>12/05/2019</p>
                        <p>100.00 R$</p> 
                    </div>}
            >
                <div>
                    <p className="title">Mês</p>
                    <div className="list-card-body">
                        <div className="list-card-item">
                            <FontAwesomeIcon icon={faShoppingBasket} size="sm" />
                            <p> 1 Item(s) restante</p>
                        </div>
                        <div className="list-card-item">
                        <FontAwesomeIcon icon={faCheck} size="sm" />
                            <p> 2 Item(s) comprados</p>
                        </div>
                    </div>
                </div>
            </CustomCard>
            

            {/* <div className="list-container">
                <Card className="card">
                    <CardActionArea className="card-action-area">
                        <CardContent className="card-content">
                            <div>
                                <p className="title">Mês</p>
                                <div className="list-card-body">
                                    <div className="list-card-item">
                                        <FontAwesomeIcon icon={faShoppingBasket} size="sm" />
                                        <p> 1 Item(s) restante</p>
                                    </div>
                                    <div className="list-card-item">
                                    <FontAwesomeIcon icon={faCheck} size="sm" />
                                        <p> 2 Item(s) comprados</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>  */}

        </div>
    );
}

export default Home;