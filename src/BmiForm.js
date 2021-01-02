import React, { Component } from 'react'
import './BmiForm.css';
import BmiInfo from './BmiInfo';
class BmiForm extends Component {
    state={
        weight:'70',
        height:'150',
        show:false,
        bmi:''
    }
    calculateBmi = ()=>{
        var bmi = this.state.weight / (this.state.height * this.state.height);
        this.setState({
            bmi:bmi,
        show:true})
    }
    changeWeight =(event)=>{
        this.setState({weight:event.target.value})
    }
    changeHeight =(event)=>{
        this.setState({height:event.target.value})
    }
    render() {
        return (
            <div>    
                <div className="data">
                    <label>Enter Weight(kg) : &nbsp;</label>
                    <input type="text" value={this.state.weight}
                    onChange={this.changeWeight}/>
                    <label>Enter Height(metres) :&nbsp; </label>
                    <input type="text" value={this.state.height}
                    onChange={this.changeHeight}/>
                </div>
                <div className="btncal">
                        <button onClick={this.calculateBmi}>Calculate BMI</button>
                </div>
                {
                    this.state.show ?
                    <BmiInfo info = {this.state}/>
                    :
                    <div></div>
                }
                
            </div>
        )
    }
}
export default BmiForm;
