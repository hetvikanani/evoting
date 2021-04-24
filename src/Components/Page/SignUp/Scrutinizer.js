import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, } from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator'
import Input from './../../Common/Input/index'
import Select from './../../Common/Select/index'
// import './signup.css'



const countryData = [
    { name: "India", value: 'india' },
    { name: "UK", value: 'uk' },
    { name: "Usa", value: 'Usa' },
    { name: "Canada", value: 'canda' },

]

const stateData = [
    { name: "Gujarat", value: 'gujarat' },
    { name: "Mp", value: 'mp' }


]
export default class Scrutinizer extends Component {
    constructor() {
        super()
        this.validator = new SimpleReactValidator();
        this.state = { field: {} }
    }

    onChange = (myField, e) => {
        let field = this.state.field;
        if (e.target.value.trim() === '') {
            field[myField] = ''
        } else { field[myField] = e.target.value }
        this.setState({ field })
    }



    onSubmit = () => {
        if (this.validator.allValid()) {

            console.log('aal set for api call or whatever u need to perform')
        }
        else {
            this.validator.showMessages()
            this.forceUpdate()
        }
    }

    render() {
        console.log("hu scrutinizer nu render")
        const { field } = this.state


        return (
            <Form >
                <Input fieldName='name' label='Name' value={field['name']} onChange={this.onChange} validator={this.validator} />
                <Input fieldName='Mobile Number' label='Mobile Number' value={field['Mobile Number']} onChange={this.onChange} validator={this.validator} />
                <Input fieldName='Email Address' label='Email Address' value={field['Email Address']} onChange={this.onChange} validator={this.validator} />
                <Input fieldName='PAN' label='PAN' value={field['PAN']} onChange={this.onChange} validator={this.validator} />
                <Input fieldName='Aadhaar Number' label='Aadhaar Number' value={field['Aadhaar Number']} onChange={this.onChange} validator={this.validator} />
                <Input fieldName='DIN' label='DIN' value={field['DIN']} onChange={this.onChange} validator={this.validator} />
                <Input fieldName='Address' label='Address' value={field['Address']} onChange={this.onChange} validator={this.validator} />
                <Input fieldName='Pincode' label='Pincode' value={field['Pincode']} onChange={this.onChange} validator={this.validator} />
                <Select data={countryData} fieldName='Country' label='Country' value={field['Country']} onChange={this.onChange} validator={this.validator} />
                <Select data={stateData} fieldName='State' label='State' value={field['State']} onChange={this.onChange} validator={this.validator} />



                <Button style={{
                    display: "block", margin: "auto", borderRadius: "2rem",
                    backgroundColor: " rgb(9, 68, 125)", maxWidth: "100%"
                }}
                    onClick={this.onSubmit}>Submit</Button>
            </Form>

        )
    }
}
