import type Organization from './Organization'

export default interface JobOffer {
    id: string
    name: string
    description: string
    publishedAt: string
    organization: Organization
}