/* eslint-disable react/prefer-stateless-function */
/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';

// reactstrap components
import { Pagination, PaginationItem, PaginationLink, Col } from 'reactstrap';

class PaginationSection extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-center py-4">
          <nav>
            <Pagination>
              <PaginationItem disabled={this.props.currentPage == 0}>
                <PaginationLink
                  onClick={e =>
                    this.props.handlePageClick(e, this.props.currentPage - 1)
                  }
                >
                  <i className="fa fa-angle-left" />
                </PaginationLink>
              </PaginationItem>
              {[...Array(this.props.totalPages)].map((x, i) => (
                <PaginationItem
                  className={i == this.props.currentPage ? `active` : ''}
                  key={i}
                >
                  <PaginationLink
                    onClick={e => this.props.handlePageClick(e, i)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem
                disabled={this.props.currentPage == this.props.totalPages - 1}
              >
                <PaginationLink
                  onClick={e =>
                    this.props.handlePageClick(e, this.props.currentPage + 1)
                  }
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
}

export default PaginationSection;
