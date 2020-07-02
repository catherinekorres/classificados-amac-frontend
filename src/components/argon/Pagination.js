import React from 'react';

// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function PaginationSection(props) {
  return (
    <>
      <div className="d-flex justify-content-center py-4">
        <nav>
          <Pagination>
            <PaginationItem disabled={props.currentPage === 0}>
              <PaginationLink
                onClick={e => props.handlePageClick(e, props.currentPage - 1)}
              >
                <i className="fa fa-angle-left" />
              </PaginationLink>
            </PaginationItem>
            {[...Array(props.totalPages)].map((x, i) => (
              <PaginationItem
                className={i === props.currentPage ? `active` : ''}
                key={i}
              >
                <PaginationLink onClick={e => props.handlePageClick(e, i)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem
              disabled={props.currentPage === props.totalPages - 1}
            >
              <PaginationLink
                onClick={e => props.handlePageClick(e, props.currentPage + 1)}
              >
                <i className="fa fa-angle-right" />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </nav>
      </div>
    </>
  );
}
