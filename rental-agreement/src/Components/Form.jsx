import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props)

        this.state ={

        }
    }

    render(){
        return (
            <div className="container" >
                <h1>Tenent Registration Form</h1>

            <form className="">

                <div class="form-group">
                        <label for="exampleInputEmail1">Full Name</label>
                        <input type="text" class="form-control" id="fullname" aria-describedby="emailHelp"></input>
                </div>
                
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Contact Info</label>
                    <input type="Number" class="form-control" id="contact"></input>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
            
            </div>
        )
    }
}
export default Form