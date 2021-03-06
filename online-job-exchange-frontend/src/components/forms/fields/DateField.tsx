import React from 'react';
import { useField } from 'formik'
import useI18n from '../../../hooks/useI18n'

interface Props {
    id: string
    label: string
    name: string
    placeholder: string
}

export default function TextField({
    label, ...props
}: Props): JSX.Element {
    const { t } = useI18n();
    const [field, meta, helpers] = useField<string>(props);

    return (
        <label>
            {t(label)}
            <input
                {...field}
                placeholder={t(props.placeholder)}
            />
            <input />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </label>
    );
}


