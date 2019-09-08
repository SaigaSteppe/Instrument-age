import React, { Component } from 'react'
import axios from 'axios'
import { Typography, InputNumber, Form, Select, Button, Row } from 'antd';


const { Title } = Typography;
const { Option } = Select;
const dateFormat = require('dateformat');

class SubmitForm extends Component {

  state = {
    data: [],

    instrumentSelected: null,
    startAge: null,
    reason: null
  }

  //after first render, get list of all instruments
  componentDidMount() {

    axios.get('https://instrumentageapi.tk/instruments')

      .then(response => { this.setState({ data: response.data }) })

      .catch(function (err) {
        console.log(err)
      })
  }


  handleChangeInstrument = value => {
    this.setState({ instrumentSelected: value });
  };

  handleChangeAge = value => {
    this.setState({ startAge: value });
  };

  handleChangeReason = value => {
    this.setState({ reason: value });
  };

  handleSubmit = () => {

    axios.post('https://instrumentageapi.tk/instrument_start_age', {
      instrument_id: this.state.instrumentSelected,
      start_age: this.state.startAge,
      reason_id: this.state.reason,
      publish_date: dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss")
    })

      .then(function (response) {
        alert('Successfully submitted. Good on you!')
        window.location = '/' //redirect to home page
      })
      .catch(function (error) {
        alert('Error. Redirecting to home page.')
        window.location = '/' //redirect to home page
      });
  }

  render() {

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const options = this.state.data.map(d => <Option key={d.id}>{d.name}</Option>);

    return (

      <div style={{ justifyContent: 'center', margin: 20 }}>

        <Title level={3} style={{textAlign:'center'}}>Make a submission</Title>
        <div style={{marginBottom: 20 }}></div>

        <Row>

          <Form {...formItemLayout} onSubmit={this.handleSubmit}>

            <Form.Item label="Instrument" required={true}>
              {(
                <Select
                  showSearch
                  value={this.state.instrumentSelected}
                  defaultActiveFirstOption={false}
                  showArrow={false}
                  onChange={this.handleChangeInstrument}
                  notFoundContent={null}
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  style={{ maxWidth: 200 }}
                >
                  {options}
                </Select>
              )}
            </Form.Item>

            <Form.Item label="Age started learning" required={true}>
              {(
                <InputNumber
                  min={1}
                  max={200}
                  precision={0}
                  onChange={this.handleChangeAge}
                />
              )}
            </Form.Item>

            <Form.Item label="Reason started to learn (Optional)">
              {(
                <Select
                  name="reason"
                  onChange={this.handleChangeReason}
                  style={{ width: 200 }}
                >
                  <Option value="1">Family</Option>
                  <Option value="2">School</Option>
                  <Option value="3">Personal interest</Option>
                  <Option value="4">Other</Option>
                </Select>
              )}
            </Form.Item>


            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" onClick={this.handleSubmit} disabled={this.state.instrumentSelected == null || this.state.startAge ==null}>
                Submit
          </Button>
            </Form.Item>
          </Form>
        </Row>

      </div>
    );
  }
}


export default SubmitForm;