import React, { Component } from 'react';
import { Input, Divider, Table, Spin, message } from 'antd';

import tableColumns from './config/tableColumns';
import './App.css';
import fetchData from './helpers/fetchData';
import databaseRef from './config/firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      loading: true,
    };
    this.searchEvent = this.searchEvent.bind(this);
  }

  componentDidMount() {
    databaseRef.on('value', (span) => {
      const dataList = Object.values(span.val()).reverse();
      this.setState({
        dataSource: dataList,
        loading: false,
      });
    });
  }

  async searchEvent(value) {
    this.setState({ loading: true });
    const dataStored = await fetchData(value);
    this.setState({ loading: false });
    if (!dataStored) {
      message.error(`Error: User ${value} not found.`);
    } else {
      message.success(`User ${value} added successfully.  `);
    }
  }

  render() {
    const { Search } = Input;
    const { dataSource, loading } = this.state;
    const paginationConfig = { defaultPageSize: 5 };
    return (
      <div className="App">
        <h1>Github User Aggregator</h1>
        <Search
          placeholder="Enter Github Username"
          enterButton="Search"
          size="large"
          onSearch={value => this.searchEvent(value)}
        />
        <br /><br />
        <Spin spinning={loading} size="large" />
        <Divider />
        <Table columns={tableColumns} dataSource={dataSource} pagination={paginationConfig} />
      </div>
    );
  }
}

export default App;
