import React from 'react'

import Header from '../components/Header'
import NewJobForm from '../components/forms/NewJobForm'
import Card from '../components/common/Card'

export default function NewJobPage(): JSX.Element {
    return (
        <>
            <Header />
            <main>
                <Card>
                    <h1>Nueva oferta</h1>
                    <NewJobForm />
                </Card>
            </main>
        </>
    )
}