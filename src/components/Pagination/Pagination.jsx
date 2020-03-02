import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { FirstPage, LastPage, KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { StyledPagination } from './Pagination.styled';

const Pagination = ({
  page,
  lastPage,
  onFirstPageButtonClick,
  onBackButtonClick,
  onNextButtonClick,
  onLastPageButtonClick
}) => (
  <StyledPagination>
    <IconButton
      onClick={onFirstPageButtonClick}
      disabled={page === 0}
    >
      <FirstPage />
    </IconButton>
    <IconButton
      onClick={onBackButtonClick}
      disabled={page === 0}
    >
      <KeyboardArrowLeft />
    </IconButton>
    <IconButton
      onClick={onNextButtonClick}
      disabled={page >= lastPage}
    >
      <KeyboardArrowRight />
    </IconButton>
    <IconButton
      onClick={onLastPageButtonClick}
      disabled={page >= lastPage}
    >
      <LastPage />
    </IconButton>
  </StyledPagination>
);

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  onFirstPageButtonClick: PropTypes.func.isRequired,
  onBackButtonClick: PropTypes.func.isRequired,
  onNextButtonClick: PropTypes.func.isRequired,
  onLastPageButtonClick: PropTypes.func.isRequired
};

export default Pagination;
