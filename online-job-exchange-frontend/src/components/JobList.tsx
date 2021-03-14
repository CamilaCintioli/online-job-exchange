import React from 'react';
import type JobOffer from '../types/JobOffer'

import useI18n from '../hooks/useI18n'

interface Props {
    jobOffers: JobOffer[]
}

export default function JobList({ jobOffers }: Props): JSX.Element {
    const { t } = useI18n();

    return (
        <ul>
            {
                jobOffers.map(jobOffer => (
                    <li>
                        <article>
                            <a href={`#${jobOffer.id}`}>
                                <img src={jobOffer.organization.logo} alt={t('jobOffer.organization.logo.alt', { organizationName: jobOffer.organization.name })} />
                                <h5>{jobOffer.organization.name}</h5>
                                <h4>{jobOffer.name}</h4>
                            </a>
                        </article>
                    </li>
                ))
            }
        </ul>
    );
}
