import { useState, useEffect } from 'react'
import { PageList, PageNumber, Footer } from './styles'

export const Pagination = (props) => {
    const [pageNumbers, setPageNumbers] = useState()
    useEffect(() => {
        setPageNumbers(preparePages(props.total_pages, props.actual_page))
    }, [])
    return (
        <>
            <nav>
                <Footer>
                    <PageList>
                        {pageNumbers ? pageNumbers.map((item) =>
                            item.selected ?
                                <PageNumber selected key={item.pageNumber}>{item.pageNumber}</PageNumber> :
                                <PageNumber
                                    key={item.pageNumber}
                                    value={item.pageNumber}
                                    // onClick={(e) => props.action(e.target.value)}>
                                    onClick={(e) => props.action(e.target.value.toString())}>
                                    {item.pageNumber}
                                </PageNumber>
                        ) : void 0}
                    </PageList>
                </Footer>
            </nav>
        </>
    )
}

const preparePages = (totalPages, actual_page, pagesArray = []) => {
    for (let i = 1; i <= totalPages; i++) {
        actual_page === i ? pagesArray.push({ pageNumber: i, selected: true }) :
            pagesArray.push({ pageNumber: i, selected: false })
    }
    return pagesArray
}