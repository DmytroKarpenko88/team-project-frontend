import React, { Component } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedPages: [],
    };
  }

  componentDidMount() {
    this.updatePages(this.props.currentPage);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.updatePages(this.props.currentPage);
    }
  }

  updatePages(page) {
    const totalDisplayedPages = 5;
    const halfTotalDisplayedPages = Math.floor(totalDisplayedPages / 2);

    let startPage = Math.max(page - halfTotalDisplayedPages, 1);
    let endPage = Math.min(
      startPage + totalDisplayedPages - 1,
      this.props.totalPages
    );

    if (endPage - startPage < totalDisplayedPages - 1) {
      startPage = Math.max(endPage - totalDisplayedPages + 1, 1);
    }

    const newPages = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
    this.setState({ displayedPages: newPages });
  }

  handlePageClick = page => {
    this.props.onPageChange(page);
    this.updatePages(page);
  };

  handlePrevClick = () => {
    if (this.props.currentPage > 1) {
      this.props.onPageChange(this.props.currentPage - 1);
      this.updatePages(this.props.currentPage - 1);
    }
  };

  handleNextClick = () => {
    if (this.props.currentPage < this.props.totalPages) {
      this.props.onPageChange(this.props.currentPage + 1);
      this.updatePages(this.props.currentPage + 1);
    }
  };

  render() {
    const { displayedPages } = this.state;
    const { currentPage } = this.props;

    return (
      <div>
        <div>
          <button onClick={this.handlePrevClick}>
            <BsArrowLeft />
          </button>
          {displayedPages.map(page => (
            <button
              key={page}
              onClick={() => this.handlePageClick(page)}
              className={currentPage === page ? 'active' : ''}
            >
              {page}
            </button>
          ))}
          <button onClick={this.handleNextClick}>
            <BsArrowRight />
          </button>
        </div>
      </div>
    );
  }
}

export default Pagination;
