import React from 'react';
import { forwardRef } from 'react';
import Table from '../../components/Table/Table'

const columns = [
  { title: 'Name', field: 'attributes.name' },
  { title: 'Campaigns', field: 'relationships.campaigns.data.length' },
  { title: 'Active', field: 'attributes.active' }
];

class List extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getClients();
  }

  render () {
    const clients = this.props.clients;
    if (clients && clients.data) {
      return (
        <Table
          title=''
          columns={columns}
          data={clients.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  debugger
                  this.props.createClient(newData.attributes)
                  // this.setState((prevState) => {
                  //   const data = [...prevState.data];
                  //   data.push(newData);
                  //   return { ...prevState, data };
                  // });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    // setState((prevState) => {
                    //   const data = [...prevState.data];
                    //   data[data.indexOf(oldData)] = newData;
                    //   return { ...prevState, data };
                    // });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  // setState((prevState) => {
                  //   const data = [...prevState.data];
                  //   data.splice(data.indexOf(oldData), 1);
                  //   return { ...prevState, data };
                  // });
                }, 600);
              }),
          }}
        />
      );
    } else {
      return [];
    }
  }
}

export default List;
