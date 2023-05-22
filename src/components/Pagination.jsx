import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ setCurrentPage, data }) => {
  let pages = data.info.pages;
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      pageCount={pages}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn"
      previousClassName="btn"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => (
        window.scrollTo(0, 0), setCurrentPage(data.selected + 1)
      )}
    />
  );
};

export default Pagination;
