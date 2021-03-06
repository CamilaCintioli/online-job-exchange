import React from 'react'
import { Formik, Form } from 'formik'

import DateField from './fields/DateField'
import OrganizationField from './fields/OrganizationField'
import TextField from './fields/TextField'
import TextAreaField from './fields/TextAreaField'

import useI18n from '../../hooks/useI18n'

export default function NewJobForm(): JSX.Element {
    const { t } = useI18n()
    return (
        <Formik initialValues={{
            organization: "",
            job: {
                name: "",
                description: "",
                dateFrom: null,
                dateTo: null,
            }
        }} onSubmit={(values) => { }}>
            <Form>
                <OrganizationField
                    label="job.form.organization.label"
                    id="organization"
                    name="organization"
                    placeholder="job.form.organization.placeholder" />

                <TextField
                    label="job.form.name.label"
                    id="name"
                    name="job.name"
                    placeholder="job.form.name.placeholder"
                />

                <TextAreaField
                    id="description"
                    label="job.form.description.label"
                    name="job.description"
                    placeholder="job.form.description.placeholder"
                />
                
                <DateField
                    label="job.form.dateForm.label"
                    id="dateFrom"
                    name="job.dateFrom"
                    placeholder="job.form.dateFrom.placeholder"
                />

                <DateField
                    id="dateTo"
                    label="job.form.dateTo.label"
                    name="job.dateTo"
                    placeholder="job.form.dateTo.placeholder"
                />
            </Form>
        </Formik>
    )
}