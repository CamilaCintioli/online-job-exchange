import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import DateField from './fields/DateField'
import OrganizationField from './fields/OrganizationField'
import TextField from './fields/TextField'
import TextAreaField from './fields/TextAreaField'
import Form from './Form'

export default function NewJobForm(): JSX.Element {

    return (
        <Formik initialValues={{
            organization: "",
            job: {
                name: "",
                description: "",
                dateFrom: null,
                dateTo: null,
            }
        }} onSubmit={(values) => { }}
            validationSchema={yup.object({
                organization: yup.string().trim().required(),
                job: yup.object({
                    name: yup.string().trim().required(),
                    description: yup.string().trim().required(),
                    dateFrom: yup.date().required(),
                    dateTo: yup.date().required(),
                }).required()
            })}
        >
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