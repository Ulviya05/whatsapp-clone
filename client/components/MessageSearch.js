import React from 'react'
import styles from '../styles/MessageSearch.module.css';

function MessageSearch() {
    return (
        <form
            className={`d-flex search d-flex align-items-center border-primary px-3 ${styles.search}`}
            role="search"
            id="searchForm"
        >
            <i className="bi bi-search"></i>
            <input
                id="search"
                type="search"
                placeholder="Search"
                className={`bg-transparent border-0 w-100 ps-2 ${styles.search_input}`}
            />
        </form>
    )
}

export default MessageSearch