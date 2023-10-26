import React from "react";
import { useSelector } from "react-redux";
import { Button, IconButton } from "@mui/material";
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';

export function Pagination(props) {
  const itemsPerPage = 10;
  const repos = useSelector((state) => state.repos);
  const totalPages = Math.ceil(repos?.length / itemsPerPage);

  const pagesToShow = 3;
  const pageRange = Math.min(pagesToShow, totalPages);
  
  let displayPages = [];
  
  if (totalPages <= pagesToShow) {
    // If there are 3 or fewer pages, display all of them
    displayPages = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else if (props.currentPage <= (pageRange - 1) / 2 + 1) {
    // If on the first page or one of the first few pages, display the first 3 pages
    displayPages = Array.from({ length: pageRange }, (_, i) => i + 1);
  } else if (props.currentPage >= totalPages - (pageRange - 1) / 2) {
    // If on the last page or one of the last few pages, display the last 3 pages
    displayPages = Array.from({ length: pageRange }, (_, i) => totalPages - (pageRange - 1) + i);
  } else {
    // Display current page and the two adjacent pages
    displayPages = Array.from({ length: pageRange }, (_, i) => props.currentPage - Math.floor(pageRange / 2) + i);
  }

  return (
    <div className="pagination">
      <IconButton
        onClick={() => props.setCurrentPage(props.currentPage - 1)}
        disabled={props.currentPage === 1}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <ul>
        {displayPages.map((page) => (
          <li key={page}>
            <Button
              onClick={() => props.setCurrentPage(page)}
              className={props.currentPage === page ? 'active' : ''}
            >
              {page}
            </Button>
          </li>
        ))}
      </ul>
      <IconButton
        onClick={() => props.setCurrentPage(props.currentPage + 1)}
        disabled={props.currentPage === totalPages}
      >
        <KeyboardArrowRight />
      </IconButton>
    </div>
  );
}
