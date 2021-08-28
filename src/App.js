import logo from './logo.svg';
import './App.css';
import Counters from  './components/counters';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class App extends Component {

  
  constructor(){

    super();

    this.state={

        counters:
            [
                {value:0,id:1},
                {value:0,id:2},
                {value:0,id:3}
            ]
        
    };

   
  }  

  update =(res)=>{

    console.log(res);

    this.setState({

        counters:[]
    })

    this.setState(
        {
        counters: res
        }
    )

  }

  handleIncrement=(id)=>{

    const countercompsincr = this.state.counters.map(counter => {if(id === counter.id){counter.value = counter.value+1}});

    console.log(countercompsincr.length);

    this.setState(

        {countercompsincr}
    )
}


  componentDidMount() {
    console.log("component did mount");
    this.fetchApi().then(res =>    
        this.update(res)
      );
 
  }

handleDelete = (id) =>{

const counterModified = this.state.counters.filter(counter => {if(counter.id !== id){return counter}});

this.setState(

    {
        counters: counterModified
    }
)

}

reset=()=>{

   const comps = this.state.counters.map(comp=> {comp.value=0; return comp});

   console.log(comps);

   this.setState({

    comps

   })

}

 fetchApi(){

    return new Promise((success,failure)=>{

        fetch('/api/getCounter').then(response => response.json())
        .then(json => {success(json)});

    })

}

totalcount=()=>{

  console.log("tot");

  let tots = 0;

 const counts =this.state.counters.forEach(c=> {tots = tots +c.value;} );

 console.log(tots)

 return tots;


}

render(){
  return (
   
    <React.Fragment>
    <div style={{marginRight:'70%',float:'right'}} className="badge badge-primary">{this.totalcount()}</div>
    
    <Counters  reset={this.reset} counters={this.state.counters} handleIncrement={this.handleIncrement} handleDelete={this.handleDelete} />
    </React.Fragment>

  );
}
}

export default App;
