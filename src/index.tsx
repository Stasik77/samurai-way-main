import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let postsData = [
    {id: 1, message: "Hi how are you" ,likesCount: 15},
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
]

let dialogsData = [
    {id: 1, nane: 'Dima'},
    {id: 2, nane: 'Oleg'},
    {id: 3, nane: 'Den'}

]

let messagesData = [
    {id: 1, message: 'you'},
    {id: 2, message: 'how is yu'},
    {id: 3, message: 'hip hop'} ,
    {id: 4, message: 'you'},
    {id: 2, message: 'how is yu'},
    {id: 3, message: 'hip hop'} ,
    {id: 1, message: 'you'},
    {id: 2, message: 'how is yu'},
    {id: 3, message: 'hip hop'}
]



ReactDOM.render(
    <App postsData={postsData} dialogsData={dialogsData}  messagesData={messagesData} />,
  document.getElementById('root')
);