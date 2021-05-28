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
    dataIndex: "telephone_number",
    key: "telephone_number",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "PAN No",
    dataIndex: "pan",
    key: "pan",
  },
  {
    title: "CIN no",
    dataIndex: "cin",
    key: "cin",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
];
class EntityDetails extends Component {
  render() {
    console.log(this.props.data, "done");
    return (
      <div>
        <Link to="/sign-up">Back to home</Link>
        <h3>Entity Details</h3>
        <Table
          pagination={false}
          dataSource={this.props.data.entityDetails}
          columns={columns}
        />
      </div>
    );
  }
}

export default connect((state) => ({ data: state.App }))(EntityDetails);


