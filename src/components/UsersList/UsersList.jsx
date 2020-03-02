import React from 'react';
import PropTypes from 'prop-types';
import { Card, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TableFooter } from '@material-ui/core';
import TablePaginationContainer from '../containers/TablePaginationContainer';
import { StyledLink } from './UsersList.styled';

const UsersList = ({ users }) => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <TableContainer component={Card}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0 ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : users).map(user => (
            <TableRow id={user.id} key={user.id}>
              <TableCell>
                <StyledLink to={`/users/${user.id}`}>{user.firstName} {user.lastName}</StyledLink>
              </TableCell>
              <TableCell>{user.city}</TableCell>
              <TableCell>{user.country}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePaginationContainer
              page={page}
              setPage={setPage}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              rowsPerPageOptions={[10, 25, 50, { label: 'All', value: -1 }]}
              count={users.length}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UsersList;
