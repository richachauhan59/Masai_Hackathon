import React from 'react'
import styles from './Home.module.css'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render(){
        return (
            <div className={`box ${styles.background}`}>
               <div className={styles.header}>Welcome To Rent Easy! </div>
               {/* <div style={{float:"left", margin:"80px 0px 0px 10%"}}><img src={"./homeImage2.png"} alt={"Image"}></img></div> */}
               <div >
                   <p className={styles.para}>
                   <h1>Hey There!</h1>
                    It's your destination to go paper and hastle free for 
                   all the work you need to settle rent agreements!
                   Here You can manage Your Rent very easily and quickly
                   just by filling very few details manage your rental
                   documents easily with our web portal convinient
                   agreement signing on this platform without the hastle
                   of physical presence</p>
                   <div className={styles.btnDiv}><button>Click me!</button></div>
               </div>
               
            </div>

        )
    }
}
