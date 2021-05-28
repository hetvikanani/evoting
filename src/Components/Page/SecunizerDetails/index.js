import React, { Component } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Mobile No",
    dataIndex: "Mobile_Number",
    key: "telephone_number",
  },
  {
    title: "Email",
    dataIndex: "Email_Address",
    key: "email",
  },
  {
    title: "PAN No",
    dataIndex: "PAN",
    key: "pan",
  },
  {
    title: "aadhar",
    dataIndex: "Aadhaar_Number",
    key: "aadhar",
  },
  {
    title: "DIN no",
    dataIndex: "DIN",
    key: "din",
  },
  {
    title: "Address",
    dataIndex: "Address",
    key: "address",
  },
  {
    title: "pincode",
    dataIndex: "Pincode",
    key: "pincde",
  },
  {
    title: "Country",
    dataIndex: "Country",
    key: "country",
  },
  {
    title: "State",
    dataIndex: "State",
    key: "state",
  },
];
class ScrutinizerDetials extends Component {
  render() {
    console.log(this.props.data, "done");
    return (
      <div>
        <Link to="/sign-up">Back to home</Link>
        <h3>Scrutinizer Details</h3>
        <Table
          pagination={false}
          dataSource={this.props.data.scrutinizerDetails}
          columns={columns}
        />
      </div>
    );
  }
}

export default connect((state) => ({ data: state.App }))(ScrutinizerDetials);
