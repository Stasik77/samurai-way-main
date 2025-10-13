import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';



function App(props: any) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={()=> <Profile postsData={props.postsData}/>}/>
                    <Route path="/dialogs" render={()=> <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path="/dialogs" render={()=> <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>


                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
