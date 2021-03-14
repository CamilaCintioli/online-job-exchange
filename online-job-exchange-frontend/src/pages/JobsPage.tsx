import React, { useState, useCallback } from 'react'
import useJobListing from '../hooks/useJobListing'
import SearchBar from '../components/SearchBar'
import JobList from '../components/JobList'


export default function JobsPage(): JSX.Element {
    const [keyword, setKeyword] = useState("")
    const [jobOffers] = useJobListing(keyword)

    const handleSearchSubmit = useCallback(({ keyword }) => {
        setKeyword(keyword)
    }, [])
    
    return (
        <>
           <SearchBar onSubmit={handleSearchSubmit} />
           <JobList jobOffers={jobOffers}/>
        </>
    )
}