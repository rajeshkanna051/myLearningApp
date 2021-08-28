import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class Counter extends Component{



    render(){

     

        return (
            <React.Fragment>

                <div className="w-10 h-2 badge badge-primary mr-3">{this.props.value}</div> 
                <Button onClick={()=>this.props.handleIncrement(this.props.id)} className="btn btn-secondary m-2"> Add  <div className="badge badge-light">+</div>  </Button>
                <Button onClick={() => this.props.handleDelete(this.props.id)} className="btn btn-danger m-2"> Delete  <div className="badge badge-light">*</div>  </Button>
                <br></br>
            </React.Fragment>
          
        
        
        
        );
    }

    
}

export default Counter;