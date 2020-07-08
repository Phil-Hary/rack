import React from 'react';

let pageLinks=[];

const totalPageLinks = (total, setPage) => {
  pageLinks=[];
  for(let i = 1; i<=total; i++){
    pageLinks.push(<li class="page-item" onClick={() => {setPage(i)}}><a class="page-link">{i}</a></li>)
  }
}

const Pagination = (props) => {
    const { pages, setPage, currentPage } = props;
    totalPageLinks(pages, setPage);
    return(
        <nav aria-label="Page navigation example" className="mt-5 d-flex justify-content-center">
          <ul class="pagination">
              <li class="page-item" onClick={() => {setPage(currentPage - 1)}}><a class="page-link">Previous</a></li>
              { pageLinks }
              <li class="page-item" onClick={() => {setPage(currentPage + 1)}}><a class="page-link">Next</a></li>
          </ul>
        </nav>
    )
}

export default Pagination;