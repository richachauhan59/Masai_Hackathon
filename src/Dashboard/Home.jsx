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


                        <div>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/2912/2912778.svg" width="50px" alt="img"></img>
                            <br></br>
                            <h4>Rental Agreement.</h4>
                        </div>
                        <div>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/1358/1358574.svg" width="50px"></img>
                            <br></br>
                            <h4>E-sign</h4>
                        </div>
                        <div>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/3010/3010995.svg" width="50px"></img>
                            <br></br>
                            <h4>Enjoy Your Home.</h4>
                        </div>

                        
                    </div>
                    <br></br>
                    <Link to="/register" className={`btn btn-outline-success ${styles.registerbtn}`}>Register!</Link>
               </div>
           </div>

        )
    }
}
