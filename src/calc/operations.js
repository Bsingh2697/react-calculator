import React,{Component} from 'react'

class Operation extends Component{
    constructor(props){
        super(props)
        this.state={
            add:'',
            subtract:'',
            multiply:'',
            divide:'',
            first:'',
            second:'',
            output:''
        }
    }
    addition = ()=>{
        this.setState({
            output:this.state.first+this.state.second
        })
    }

    subtraction = ()=>{
        this.setState({
            output:this.state.first-this.state.second
        })
    }

    multiplication = ()=>{
        this.setState({
            output:this.state.first*this.state.second
        })
    }

    division = ()=>{
        this.setState({
            output:this.state.first/this.state.second
        })
    }

    firstChange = (inputOne)=>{
        this.setState({
            first: parseInt(inputOne.target.value)
        })
    }

    secondChange = (inputTwo)=>{
        this.setState({
            second: parseInt(inputTwo.target.value)
        })
    }

    render(){
        return(
            <React.Fragment>
                <tbody>
                <tr>
                    <td><input type="number" value={this.state.first} onChange={this.firstChange}/></td>
                    <td><input type="number" value={this.state.second} onChange={this.secondChange}/></td>
                </tr>    
                <tr>
                    <td><button onClick={this.addition}><span class="fas fa-plus"></span></button></td>
                    <td><button onClick={this.subtraction}><span class="fas fa-minus"></span></button></td>
                </tr>
                <tr>
                    <td><button onClick={this.multiplication}><span class="fas fa-asterisk"></span></button></td>
                    <td><button onClick={this.division}><span class="fas fa-divide"></span></button></td>
                </tr>
                {/* <tr>
                    <td colSpan="2"><button>Result</button></td>
                </tr> */}
                <tr>
                    <td colSpan='2'><input type="number" value={this.state.output} readOnly/></td>
                </tr>    
                </tbody>
            </React.Fragment>
        )
    }
}

export default Operation