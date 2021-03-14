import React from 'react';

import useI18n from '../hooks/useI18n'

interface Job {
    organization: {
        id: string
        name: string
        logo: string
    }
    job: {
        id: string
        name: string
        description: string
        publishedAt: string
    }
}

interface Props {
    jobOffers: Job[]
}

export default function JobList({ jobOffers }: Props): JSX.Element {
  const { t } = useI18n();

    return (
        <ul>
            {
                jobOffers.map(jobOffer => (
                    <li>
                        <article>
                            <img src={jobOffer.organization.logo} alt={t('jobOffer.organization.logo.alt', { organizationName: jobOffer.organization.name })} />
                            <h4>{jobOffer.job.name}</h4>
                            <h5>{jobOffer.organization.name}</h5>
                        </article>
                    </li>
                ))
            }
        </ul>
    );
}
