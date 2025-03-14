import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      console.log(goToPage);
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;

    // sayfa sayısının hesabı 5.9 sayfa lazım 6 ya yuvarladım
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(curPage + 'curPage');
    console.log(numPages + 'numPages');
    // sayfa 1 ise başka sayfalar da var
    if (curPage === 1 && numPages > 1) {
      return `<button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
      </svg>
  </button>`;
    }
    // sayfa 1 ama başka sayfalar yok
    // son sayfa
    if (curPage === numPages && numPages > 1) {
      return `<button data-goto="${
        curPage - 1
      }"class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span> 
        </button>`;
    }
    // other page

    if (curPage < numPages) {
      return `<button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span> 
</button>


<button data-goto="${curPage + 1}"class="btn--inline pagination__btn--next">
    <span>Page ${curPage + 1}</span>
    <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
    </svg>
</button>`;
    }

    // sayfa1, ve başka sayfa yok
    return ' ';
  }
}

export default new PaginationView();
