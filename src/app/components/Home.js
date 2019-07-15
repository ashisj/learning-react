import React from "react";

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            age: props.age,
            status: 0
        };
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }
    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status : {this.state.status}</p>
               <hr/>
               <button className="btn btn-primary" onClick ={ () => this.onMakeOlder()} >Make me older</button>
            </div>
        );
    }
}