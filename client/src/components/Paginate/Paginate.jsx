import { nextPage, prevPage, goToPage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./Paginate.module.css";

const Paginate = () => {
  const { numPage, countries } = useSelector((state) => state);
  let totalPagesData = Math.ceil(countries.length / 10);
  const dispatch = useDispatch();
  const nextHandler = () => {
    dispatch(nextPage());
    window.scrollTo(0, 0);
  };
  const prevHandler = () => {
    dispatch(prevPage());
    window.scrollTo(0, 0);
  };
  const goToPageHandler = (event) => {
    const value = Number(event.target.getAttribute("data-value"));
    dispatch(goToPage(value));
    window.scrollTo(0, 0);
  };
  const totalPages = () => {
    let elementosH1 = [];
    const maxPages = Math.min(totalPagesData, 10);
    const startPage = numPage - Math.floor(maxPages / 2);

    const normalizedStartPage = Math.max(
      1,
      Math.min(startPage, totalPagesData - maxPages + 1)
    );

    for (let i = 0; i < maxPages; i++) {
      const pageNumber = normalizedStartPage + i;
      elementosH1.push(
        <p
          key={pageNumber}
          data-value={pageNumber}
          onClick={goToPageHandler}
          className={pageNumber === numPage ? style.active : ""}
        >
          {pageNumber}
        </p>
      );
    }
    return elementosH1;
  };
  return (
    <div className={style.page}>
      {numPage !== 1 && <button onClick={prevHandler}>PREV</button>}
      {totalPagesData !== 0 && <div className={style.num}>{totalPages()}</div>}
      {numPage !== totalPagesData && totalPagesData !== 0 && (
        <button onClick={nextHandler}>NEXT</button>
      )}
    </div>
  );
};

export default Paginate;
