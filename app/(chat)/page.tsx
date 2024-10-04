import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { auth } from '@/auth'
import { Session } from '@/lib/types'
import { getMissingKeys } from '@/app/actions'

export const metadata = {
  title: 'Next.js AI Chatbot'
}

export default async function IndexPage() {
  const id = nanoid()
  const session = (await auth()) as Session
  const missingKeys = await getMissingKeys()

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      
<script src="https://cdn.nuclia.cloud/nuclia-chat-widget.umd.js"></script>
<nuclia-chat
  mode="dark"
  knowledgebox="c3043a5c-8c96-48d9-b236-d4f74d092880"
  zone="aws-us-east-2-1"
  features="answers,suggestions,autocompleteFromNERs,hideThumbnails,hideLogo,permalink"
  not_enough_data_message="Sorry I am not sure I have enough information to answer. Could you expound on that?"
  state="PRIVATE"
  account="68fffebd-9e10-45e1-87af-e2c0f67fb40a"
  kbslug="project-theostack"
  apikey="eyJhbGciOiJSUzI1NiIsImtpZCI6InNhIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2F3cy11cy1lYXN0LTItMS5udWNsaWEuY2xvdWQvIiwiaWF0IjoxNzI4MDQ5NjgwLCJzdWIiOiJkYmM3OTIxZC1lMDcxLTRjNTUtOGQ1ZC01ODJlYjExMTAxMTIiLCJqdGkiOiJjNTRkZWM5Ny03Y2MwLTRjNjMtYTE0NS1jNmY0ZGQ4MmI2Y2IiLCJleHAiOjE3NTk1ODU2ODAsImtleSI6ImIzODRjNmVlLWUyNWItNGFhMS1hZTJjLTdkYzA5ZDUzY2Q2YyIsImtpZCI6IjU3NDVlNzcyLWJmYzUtNDE1Ny1hMmM0LTlmNThkZWFiODRhYyJ9.UUfVZOZr8Ca-ZL4tCBSxhkElmmF04WO7c1krJSbGeZCbIB30Rdfxw-yVX30ntK-2DDFbHVFiPptr3FeC8x-QY9ISidfK7P6tcIx4FcfqzMT0uCknY4Sq9UfhViTsDHzMiSYtu0w4NPegtzPFmRuC_43sGoALyNLdFxp5RITbgW-8CEpT866Tmnjg5h8k07Z_ahNj3okwngrO8V8H2-UvbYQivbAbMSUmaPXLyqZhWsAYZgBr_cLRoI8XRdllTSuWKDQqPLTBqBliEcLpmKxuxuLcFG8xpydftJ8ou5yBJxsxLRkCYxIRbN-8ioA_UQewRE71jvElJ-VAcVvAbv-2ec_Gn_QKfpz2zS0OQq6xXFDAOt7bYOWNeQSyVYlP8CAPOIaZs2kaeJxK9dmGI0gQA6f3IHGpusXLjU7B1KDgmek79rFYky2Q7nkZHXv4N_fUUAfreFVqo2Fvxn3FXhmaw0xK9ASqGSK8np5oiJNx6nU1Oel71FpOB3AgnYGhM_-JQIRQMlJAW6rh7b3Zf4AoL76KQzC8xYxvkBJw7rqvv6gsED1xIPWHX8AKM624PzWbJlM3BZO2j5kHYTAsT7yS0e5xh2AQUMUu_6DzcSukni7G9YKSIaM8PFRHEBh_WGABzVdRkpM4od-x8cf3TddaOG0edbT0MMai_fTizPUTuTo"></nuclia-chat>
      {/*<Chat id={id} session={session} missingKeys={missingKeys} />*/}
    </AI>
  )
}
