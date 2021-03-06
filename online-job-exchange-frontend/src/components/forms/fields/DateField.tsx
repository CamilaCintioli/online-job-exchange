import React from 'react';
import { useField } from 'formik'

import useI18n from '../../../hooks/useI18n'
import Label from '../../common/Label'
import LabelName from '../../common/LabelName'
import Input from '../../common/Input'
import ErrorMessage from '../../common/ErrorMessage'

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
        <Label>
            <LabelName>{t(label)}</LabelName>
            <Input
                {...field}
                type="datetime-local"
                placeholder={t(props.placeholder)}
            />
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </Label>
    );
}


