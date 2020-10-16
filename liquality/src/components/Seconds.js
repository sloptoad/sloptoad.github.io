import React from 'react';


class Seconds extends React.Component{
    // state = {
    //     seconds: 5000
    // };
handleClick = (event)=>{
    this.props.handleFormSubmit(event.target.value)
}
    render() {

        return(
            <div className="button-container">
                <button value={5000} onClick={this.handleClick}>5</button>
                <button value={10000} onClick={this.handleClick}>10</button>
                <button value={15000} onClick={this.handleClick}>15</button>
            </div>
        )
    }
}

export default Seconds;