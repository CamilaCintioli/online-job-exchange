import React from 'react';
import type JobOffer from '../types/JobOffer'
import JobListItem from '../components/JobListItem'
import styled from 'styled-components';
import Card from './common/Card';

interface Props {
    jobOffers: JobOffer[]
}

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
`

const JobListCard = styled(Card)`
    padding: 0.5em;

`

export default function JobList({ jobOffers }: Props): JSX.Element {

    return (
        <Ul>
            {
                jobOffers.map(jobOffer => (
                    <JobListCard as="li">
                        <JobListItem jobOffer={jobOffer} />
                    </JobListCard>
                ))
            }
        </Ul>
    );
}
