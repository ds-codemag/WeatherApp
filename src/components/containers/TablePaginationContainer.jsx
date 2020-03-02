import React from 'react';
import { TablePagination } from '@material-ui/core';
import PaginationContainer from './PaginationContainer';

const TablePaginationContainer = ({ setPage, setRowsPerPage, ...props}) => {

  const handleChangePage = nextPage => {
    setPage(nextPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      {...props}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      ActionsComponent={PaginationContainer}
    />
  );
};

export default TablePaginationContainer;
