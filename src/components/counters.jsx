import React, { Component } from 'react';
import Counter from './counter';
import Button from 'react-bootstrap/Button';


class Counters extends Component{




render(){
   

    return (
        <React.Fragment>
        <Button onClick={this.props.reset} className="btn btn-primary mt-1">Reset</Button>
        <div> 
            {this.props.counters.map(counter => <Counter value={counter.value} id={counter.id} handleIncrement={this.props.handleIncrement} handleDelete={this.props.handleDelete} key={counter.id}/>)}
        </div>
        </React.Fragment>
    );
    }



}

export default Counters;