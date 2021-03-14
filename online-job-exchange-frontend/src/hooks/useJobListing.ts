import type JobOffer from '../types/JobOffer';

export default function useJobListing(keyword: string): [JobOffer[]] {
  return [
    [
      {
        id: "2",
        name: "Job name 1",
        description: "job description",
        publishedAt: new Date().toISOString(),
        organization: {
          id: "1",
          name: "Company1",
          logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQEISURHjdkrxg/company-logo_200_200/0/1612219642438?e=1623888000&v=beta&t=d2KqW2AIRWrMd2rQTaSSj5CcvHB9lOxJPuqbdPStm-8"
        }
      },
      {
        id: "3",
        name: "Job name 1",
        description: "job description",
        publishedAt: new Date().toISOString(),

        organization: {
          id: "1",
          name: "Company1",
          logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQEISURHjdkrxg/company-logo_200_200/0/1612219642438?e=1623888000&v=beta&t=d2KqW2AIRWrMd2rQTaSSj5CcvHB9lOxJPuqbdPStm-8"
        },
      },
      {
        id: "5",
        name: "Job name 2",
        description: "job description 2",
        publishedAt: new Date().toISOString(),
        organization: {
          id: "4",
          name: "Company2",
          logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQEISURHjdkrxg/company-logo_200_200/0/1612219642438?e=1623888000&v=beta&t=d2KqW2AIRWrMd2rQTaSSj5CcvHB9lOxJPuqbdPStm-8"
        },

      },
    ]
  ]
}
