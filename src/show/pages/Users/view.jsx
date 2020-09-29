import React from 'react';
import { forwardRef } from 'react';
import Table from '../../components/Table/Table'
import Avatar from '@material-ui/core/Avatar';

const columns = [
  { title: '',
    field: 'attributes.avatar_url',
    render: rowData => <Avatar alt="LS" src={rowData.attributes.avatar_url} />,
    width: 10
  },
  { title: 'First Name', field: 'attributes.first_name' },
  { title: 'Last name', field: 'attributes.last_name' },
  { title: 'Role', field: 'role' }
];

class List extends React.Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render () {
    const users = this.props.users;
    if (users && users.data) {
      return (
        <Table
          title=''
          columns={columns}
          data={users.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  // setState((prevState) => {
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
