import React, {Fragment} from 'react';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import store from '../store';
import { Provider } from 'react-redux';

const App = () => {

    return (
        <Provider store={store}>
            <>
                <Header />
                <div className='container'>
                    <Dashboard />
                </div>

            </>
        </Provider>
    );
}

export default App;