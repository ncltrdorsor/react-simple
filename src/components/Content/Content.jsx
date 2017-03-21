import React, { Component } from 'react';
import styles from './Content.scss'

export default class Content extends Component{
    render(){
        return(
            <div className={styles.root}>
                Some Content.
            </div>
        );
    }
}