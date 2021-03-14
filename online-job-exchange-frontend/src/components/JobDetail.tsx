import React from 'react';
import useI18n from '../hooks/useI18n';
import type JobOffer from '../types/JobOffer'

interface Props {
    jobOffer: JobOffer
}

export default function JobDetail({ jobOffer }: Props): JSX.Element {
    const { t } = useI18n(); 

    return (
        <div>
            <img src={jobOffer.organization.logo} alt={t('jobOffer.organization.logo.alt', { organizationName: jobOffer.organization.name })} />
            <h4>{jobOffer.organization.name}</h4>
            <h4>{jobOffer.name}</h4>
            <h3>{jobOffer.description}</h3>
            <h3>{jobOffer.publishedAt}</h3>
        </div>
    );
}
