import React from 'react';
import Pagination from '../Pagination';

const PaginationContainer = ({ count, page, rowsPerPage, onChangePage }) => {

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Pagination
      page={page}
      lastPage={Math.ceil(count / rowsPerPage) - 1}
      onFirstPageButtonClick={handleFirstPageButtonClick}
      onBackButtonClick={handleBackButtonClick}
      onNextButtonClick={handleNextButtonClick}
      onLastPageButtonClick={handleLastPageButtonClick}
    />
  );
};

export default PaginationContainer;
