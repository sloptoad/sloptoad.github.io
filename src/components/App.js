import React from 'react';
import Request from '../api/Request';
import Seconds from './Seconds';
import '../styles/App.scss';


class App extends React.Component{
    state = {
        selected: 5000
    }
    handleSubmit = (selectedSeconds)=>{
        this.setState({
            selected:selectedSeconds
        })
    }
render(){
    return(
         <div className="ui container">
           <Seconds handleFormSubmit={this.handleSubmit} />  
           <Request seconds={this.state.selected} />

         </div>
         )
    }
}

export default App;