interface JobOffer {
  organization: {
    id: string
    name: string
    logo: string
  }
  job: {
    id: string
    name: string
    description: string
    publishedAt: string
  }
}

export default function useJobListing(keyword: string): [JobOffer[]] {
  return [
    [
      {
        organization: {
          id: "1",
          name: "Company1",
          logo: "http://foo.com/company1.jpg"
        },
        job: {
          id: "2",
          name: "Job name 1",
          description: "job description",
          publishedAt: new Date().toISOString()
        }
      },
      {
        organization: {
          id: "1",
          name: "Company1",
          logo: "http://foo.com/company1.jpg"
        },
        job: {
          id: "3",
          name: "Job name 1",
          description: "job description",
          publishedAt: new Date().toISOString()
        }
      },
      {
        organization: {
          id: "4",
          name: "Company2",
          logo: "http://foo.com/company2.jpg"
        },
        job: {
          id: "5",
          name: "Job name 2",
          description: "job description 2",
          publishedAt: new Date().toISOString()
        }
      },
    ]
  ]
}
