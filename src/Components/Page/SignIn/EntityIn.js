import { Form, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import AntdInput from "../../Common/AntdInput";
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



const EntityIn = () => {
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    >
      <AntdInput
        label="Username*"
        name="xyz"
        message="Please input your username!"
      />
      <AntdInput
        label="Password*"
        name="password"
        message="Please input your password!"
        password
      />
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

export default EntityIn;

// class EntityIn extends Component {
//   constructor() {
//     super();
//     this.validator = new SimpleReactValidator();
//     this.state = { field: {} };
//   }

//   onChange = (myField, e) => {
//     let field = this.state.field;
//     if (e.target.value.trim() === "") {
//       field[myField] = "";
//     } else {
//       field[myField] = e.target.value;
//     }
//     this.setState({ field });
//   };

//   onSubmit = () => {
//     if (this.validator.allValid()) {
//       console.log("validator");
//     } else {
//       this.validator.showMessages();
//       this.forceUpdate();
//     }
//   };
//   render() {
//     console.log("hu signin 2nd entity");
//     const { field } = this.state;

//     return (
//       <div>
//         <Form>
//           <CustomInput
//             fieldName="name"
//             label="User Name"
//             value={field["name"]}
//             onChange={this.onChange}
//             validator={this.validator}
//           />

//           <CustomInput
//             type="password"
//             fieldName="password"
//             label="Password"
//             value={field["password"]}
//             onChange={this.onChange}
//             validator={this.validator}
//           />

//           <Button onClick={this.onSubmit}>Log In</Button>
//         </Form>
//       </div>
//     );
//   }
// }
// export default EntityIn;


