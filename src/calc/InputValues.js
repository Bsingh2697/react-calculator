import React,{Component} from 'react'
import Operation from './operations';

class InputValues extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>Calculator</h1>
                <br></br>
                <table>
                    <Operation></Operation>
                </table>
            </React.Fragment>    
            )
    }
}

export default InputValues