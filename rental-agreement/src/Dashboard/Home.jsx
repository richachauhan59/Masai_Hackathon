import React from 'react'
import styles from './Home.module.css'
import {Link} from 'react-router-dom'


export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render(){
        return (
           <div className={styles.main}>
               <div>
                    <h1 className={styles.heading}>
                        Rent Easy
                    </h1>
                    <div className={styles.subheading}>
                        Your dream home just a few clicks away.
                    </div>
                    <br></br>

                    <div className={styles.list}>
                            <h4>Get Your Rental Agreement within Minutes.</h4>
                            <h4>E-sign your Rental Agreement.</h4>
                            <h4>Enjoy Your Home.</h4>
                        
                    </div>
                    <br></br>
                    <Link to="/register" className={`btn btn-outline-success ${styles.registerbtn}`}>Register!</Link>
               </div>
           </div>

        )
    }
}
