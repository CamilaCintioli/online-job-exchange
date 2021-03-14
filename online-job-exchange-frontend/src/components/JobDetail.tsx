import React from 'react'
import styled from 'styled-components'
import useI18n from '../hooks/useI18n'
import type JobOffer from '../types/JobOffer'
import Card from './common/Card'

interface Props {
    jobOffer: JobOffer
}

const Img = styled.img`
    margin: auto;
    display: block;
`
const JobOrganizationName = styled.h3`
    text-align: center;

`
const JobOfferName = styled.h4`
    text-align: center;
`
const JobOfferDescription = styled.p`
    text-align: center;
`
const JobOfferPublishDate = styled.p`
    text-align: end;
`

const JobDetailCard = styled(Card)`
    margin: 1em 0;
`
export default function JobDetail({ jobOffer }: Props): JSX.Element {
    const { t } = useI18n();

    return (
        <JobDetailCard as="article">
            <Img src={jobOffer.organization.logo} alt={t('jobOffer.organization.logo.alt', { organizationName: jobOffer.organization.name })} />
            <JobOrganizationName>{jobOffer.organization.name}</JobOrganizationName>
            <JobOfferName>{jobOffer.name}</JobOfferName>
            <JobOfferDescription>{jobOffer.description}</JobOfferDescription>
            <JobOfferPublishDate>
                <time>{jobOffer.publishedAt}</time>
            </JobOfferPublishDate>
        </JobDetailCard>
    );
}
