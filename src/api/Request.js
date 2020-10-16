import React from 'react';
import shortid from "shortid";



class Request extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          intervalID: null

        };
      }

      getRandomKey = () => {
        return shortid.generate();
    }
      componentDidMount(){
        setTimeout(async () => {
            fetch("https://liquality.io/swap/agent/api/swap/marketinfo")
              .then(res => res.json())
              .then(
                (results) => {
                  this.setState({
                    isLoaded: true,
                    items: results
                     });
                },
                
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  });
                }
              )
              console.log(this.props.seconds)
            }, parseInt(this.props.seconds))      }
    
    //   makeRequest() {
    //     let intervalID  = setTimeout(async () => {
    //     fetch("https://liquality.io/swap/agent/api/swap/marketinfo")
    //       .then(res => res.json())
    //       .then(
    //         (results) => {
    //           this.setState({
    //             isLoaded: true,
    //             items: results,
    //             intervalID: intervalID
    //              });
    //         },
            
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         }
    //       )
    //       console.log(this.props.seconds)
    //     }, parseInt(this.props.seconds))

    //   }
 componentDidUpdate(){
     setTimeout(async () => {
        fetch("https://liquality.io/swap/agent/api/swap/marketinfo")
          .then(res => res.json())
          .then(
            (results) => {
              this.setState({
                isLoaded: true,
                items: results
                 });
            },
            
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
          console.log(this.props.seconds)
        }, parseInt(this.props.seconds))
 }
    
      render() {
        const { error, isLoaded, result } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {this.state.items.map((items, index) => (
                <li  key={this.getRandomKey()}>
                    {this.state.items[index].from} - {this.state.items[index].to}
                   <div className="rate"> {this.state.items[index].rate}</div>

                </li>
              ))}
            </ul>
          );
        }
      }
    }


export default Request;