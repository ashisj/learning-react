import React from "react";

export class Home extends React.Component {
    constructor(props){
        super();
        this.age = props.age;
    }
    onMakeOlder() {
        this.age += 3;
        console.log(this.age);
    }
    render() {
        console.log(this.props);
        var text = "searching!";
        return (
            <div>
                <p>In a new Component!</p>
                <p>{text}</p>
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
               <hr/>
               <button className="btn btn-primary" onClick ={this.onMakeOlder.bind(this)} >Make me older</button>
            </div>
        );
    }
}
/*
Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
};
*/
//                <button className="btn btn-primary" onClick ={ () => this.onMakeOlder()} >Make me older</button>