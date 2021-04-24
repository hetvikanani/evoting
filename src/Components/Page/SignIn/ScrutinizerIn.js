import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const ScrutinizerIn = () => {
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 17,
          span: 17,
        }}
      >
        <Link to="forgot-password">
          <span>Forgot password?</span>
        </Link>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button shape="round" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ScrutinizerIn;

// import React, { Component } from 'react'
// import { Button, Form, FormGroup, Label, FormText, Input as ReactStrapInput } from 'reactstrap';

// import SimpleReactValidator from 'simple-react-validator'
// import Input from './../../Common/Input/index'

// class ScrutinizerIn extends Component {
//     constructor() {
//         super()
//         this.validator = new SimpleReactValidator();
//         this.state = { field: {} }
//     }

//     onChange = (myField, e) => {
//         let field = this.state.field;
//         if (e.target.value.trim() === '') {
//             field[myField] = ''
//         } else { field[myField] = e.target.value }
//         this.setState({ field })
//     }

//     onSubmit = () => {
//         if (this.validator.allValid()) {
//             console.log("validator")
//         }

//         else {
//             this.validator.showMessages()
//             this.forceUpdate()
//         }
//     }
//     render() {
//         console.log("hu signin 2nd entity")
//         const { field } = this.state
//         return (
//             <div>
//                 <Form>
//                     <Input fieldName='name' label='User Name' value={field['name']} onChange={this.onChange} validator={this.validator} />

//                     <Input validationType='min:6' type='password' fieldName='password' label='Password' value={field['password']} onChange={this.onChange} validator={this.validator} />

//                     <Button onClick={this.onSubmit}>Log In</Button>
//                 </Form>
//             </div>
//         )
//     }
// }
// export default ScrutinizerIn



// Ui na changes hse color and margin spacing ne e pchi biju ke hve main done