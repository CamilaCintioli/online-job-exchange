import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import useI18n from '../hooks/useI18n';

interface Props {
    onSubmit: (filters: { keyword: string }) => (void | Promise<void>)
}

export default function SearchBar({ onSubmit }: Props): JSX.Element {
    const { t } = useI18n();

    return (
        <Formik
            initialValues={{
                keyword: ""
            }}
            validationSchema={yup.object({
                keyword: yup.string().trim().required()
            })}
            onSubmit={onSubmit}
        >
            <Form>
                <Field name="keyword" type="text" />
                <button type="submit">{t('common.search')}</button>
            </Form>
        </Formik>
    );
}
