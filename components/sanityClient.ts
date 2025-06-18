import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ie8xrz97',
  dataset: 'production',
  apiVersion: '2023-06-01',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
})