import React, { useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import SearchBar from '../components/SearchBar'
import JobList from '../components/JobList'
import JobDetail from '../components/JobDetail'

import useJobListing from '../hooks/useJobListing'
import useJobOfferDetail from '../hooks/useJobOfferDetail'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    max-width: 1280px;
    margin: auto;
`

export default function JobsPage(): JSX.Element {
    const [keyword, setKeyword] = useState("")
    const [jobOffers] = useJobListing(keyword)

    const handleSearchSubmit = useCallback(({ keyword }) => {
        setKeyword(keyword)
    }, []);

    const { hash } = useLocation()
    const focusedOfferId = hash.slice(1)
    const [jobOffer] = useJobOfferDetail(focusedOfferId)

    return (
        <>
            <SearchBar onSubmit={handleSearchSubmit} />
            <Container>
                <JobList jobOffers={jobOffers} />
                <JobDetail jobOffer={jobOffer} />
            </Container>
        </>
    )
}