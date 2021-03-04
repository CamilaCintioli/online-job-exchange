import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewStudentPage from './pages/NewStudentPage'
import NewJobPage from './pages/NewJobPage'
import NewOrganizationPage from './pages/NewOrganizationPage'
import StudentsPage from './pages/StudentsPage'
import JobsPage from './pages/JobsPage'
import OrganizationsPage from './pages/OrganizationsPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

export default function App(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route path="/students/new">
                    <NewStudentPage />
                </Route>
                <Route path="/jobs/new">
                    <NewJobPage />
                </Route>
                <Route path="/organizations/new">
                    <NewOrganizationPage />
                </Route>
                <Route path="/students">
                    <StudentsPage />
                </Route>
                <Route path="/jobs">
                    <JobsPage />
                </Route>
                <Route path="/organizations">
                    <OrganizationsPage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    )
}