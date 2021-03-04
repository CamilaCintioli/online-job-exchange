import React from 'react'
import { Formik, Form, Field } from 'formik'
import useI18n from '../../hooks/useI18n'

export default function NewJobForm(): JSX.Element {
    const { t } = useI18n()
    return (
        <Formik initialValues={{}} onSubmit={(values) => { }}>
            <Form>
                <label>
                    {t("job.form.organization.label")}
                    <Field name="organization" placeholder={t("job.form.organization.placeholder")} />
                </label>
                <label>
                    {t("job.form.name.label")}
                    <Field name="job.name" placeholder={t("job.form.name.placeholder")} />
                </label>
                <label>
                    {t("job.form.description.label")}
                    <Field name="job.description" placeholder={t("job.form.description.placeholder")} />
                </label>
                <label>
                    {t("job.form.dateFrom.label")}
                    <Field name="job.dateFrom" placeholder={t("job.form.dateFrom.placeholder")} />
                </label>
                <label>
                    {t("job.form.dateTo.label")}
                    <Field name="job.dateTo" placeholder={t("job.form.dateTo.placeholder")} />
                </label>
            </Form>
        </Formik>
    )
}