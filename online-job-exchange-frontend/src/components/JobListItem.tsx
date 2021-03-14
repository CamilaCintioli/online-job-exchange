import React from 'react';

import type JobOffer from '../types/JobOffer';
import useI18n from '../hooks/useI18n';
import styled from 'styled-components';

interface Props {
    jobOffer: JobOffer
}

const Article = styled.article`
    display: grid;
    grid-template-columns: 7em 1fr;

`
const Anchor = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: unset;
    display: contents;
`
const Section = styled.section``

const Picture = styled.picture`
`
const Img = styled.img`
    display: block;
    width: 100%;
    height: auto;
`
const JobOrganizationName = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color:${props => props.theme.primaryColor};
`
const JobOfferName = styled.h4`
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme.neutralColor};
`

export default function JobListItem({ jobOffer }: Props): JSX.Element {

    const { t } = useI18n();

    return (
        <Article>
            <Anchor href={`#${jobOffer.id}`}>
                <Picture>
                    <Img src={jobOffer.organization.logo} alt={t('jobOffer.organization.logo.alt', { organizationName: jobOffer.organization.name })} />
                </Picture>
                <Section>
                    <JobOrganizationName>{jobOffer.organization.name}</JobOrganizationName>
                    <JobOfferName>{jobOffer.name}</JobOfferName>
                </Section>
            </Anchor>
        </Article>
    );
}
