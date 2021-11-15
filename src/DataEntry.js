import React, { Component } from 'react'

export default class DataEntry extends Component {

    constructor(props){
        super(props)

        this.state = {
            fnm: "Name",
            email: " Email",
            address: "Address",
            address2: " No Address2",
            city: "City",
            province: "Province",
            postalcode: "Postal Code"
        }

    }
    sayHello(){
        alert("Hello, Joel")
    }
     readData = (event) =>{
         this.setState({
             ...this.state,
             [event.target.name]:event.target.value
        })

     }
     submitData = (e) => {
         e.preventDefault()
         alert("Submit")
         console.log(JSON.stringify(this.state))
     }
    
    cities = ["Toronto", "Quebec", "Montreal", "Rio de Janeiro"]

    render() {
        return (
            <div>
                <form onSubmit={this.submitData}>
                <h4>{this.state.email}</h4>
                <input name="email" onChange={this.readData} placeholder="Enter your email" type= "text" />
                <h4>{this.state.fnm}</h4>
                <input name="fnm" onChange={this.readData} placeholder="Enter Full Name" type= "text" />
                <h4>{this.state.address}</h4>
                <input name="address" onChange={this.readData} placeholder="Enter your Address" type= "text" />
                <h4>{this.state.address2}</h4>
                <input name="address2" onChange={this.readData} placeholder="Enter your Address 2" type= "text" />
                <h4>{this.state.city}</h4>
                <select><option key="">Select Name</option>
                        {this.cities.map(v =>{return (<option key={v}>{v}</option>)})}
                </select>
                <h4>{this.state.province}</h4>
                <input name="province" onChange={this.readData} placeholder=" " type= "text" />
                <h4>{this.state.postalcode}</h4>
                <input name="postalcode" onChange={this.readData} placeholder="Enter your Postal Code" type= "text" />
                <input type="checkbox" name="checkbox" value="check" id="agree" /> Agree Terms & Conditions
                <input type="submit" value="Submit"/>
                </form>
                <br/>
                
            </div>
        )
    }
}
