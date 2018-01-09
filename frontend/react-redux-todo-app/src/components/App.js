import React from 'react';
import TodoContainer from '../container/TodoContainer';

const App = () => {
    return (
        <div className="container" style={{marginTop: '1%'}}>
            <div className="container">
                <TodoContainer/>
            </div>
        </div>
    )
};
export default App;