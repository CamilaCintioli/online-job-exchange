import React from 'react'
import Header from '../components/Header'
import NewJobForm from '../components/forms/NewJobForm'

export default function NewJobPage(): JSX.Element {
    return (
        <>
            <Header />
            <main>
                <h1>Nueva oferta</h1>
                <NewJobForm />
            </main>
        </>
    )
}