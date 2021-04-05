import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './commentdetail';

const App = () => {
    return (
        <div className="comment container">
         <CommentDetail />   
         <CommentDetail />   
         <CommentDetail />   
         <CommentDetail />   
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
