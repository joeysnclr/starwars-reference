import React from 'react'

export default function Pagination({ items, Component}) {
    const [currentPage, setCurrentPage] = React.useState(1);
    // change page
    function paginate(pageNum) {
        setCurrentPage(pageNum)
    }

    const itemsPerPage = 12;
    const pages = Math.ceil(items.length / itemsPerPage)
    const pagesArray = []
    for (let i = -2; i <= 2; i++) {
        let pgNum = currentPage + i;
        if (pgNum >= 1 && pgNum <= pages) {
            pagesArray.push(pgNum)
        }
    }
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

    return (
        <div>
            <div className="d-flex flex-wrap">
                {currentItems.map(item => <Component data={item} />)}
            </div>
            <nav className="d-flex justify-content-center">
                <ul className="pagination">
                    <PaginationButton text="Prev" pageNum={currentPage - 1} active={false} onclickFunction={paginate} disabled={currentPage <= 1} />
                    {pagesArray.map(pageNum => (
                        <PaginationButton text={pageNum} pageNum={pageNum} active={pageNum === currentPage} onclickFunction={paginate} />
                    ))}
                    <PaginationButton text="Next" pageNum={currentPage + 1} active={false} onclickFunction={paginate} disabled={currentPage >= pages} />
                </ul>
            </nav>
        </div>
    )
}

function PaginationButton({text, pageNum, active, onclickFunction, disabled}) {
    let classNames = "page-item"
    if (active) {
        classNames += " active"
    }
    if (disabled) {
        classNames += " disabled"
    }
    return (
        <li key={pageNum} className={classNames}>
            <button onClick={() => onclickFunction(pageNum)} href="#" className="page-link">{text}</button>
        </li>
    )
}

