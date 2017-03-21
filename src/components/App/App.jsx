import React, { Component } from 'react';
import { Content } from 'components';
import styles from './App.scss'

export default class App extends Component{
    render(){
        return(
            <div>
                <h1 className={styles.Title}>{this.props.text}</h1>
                <Content />      
            </div>
        );
    }
}