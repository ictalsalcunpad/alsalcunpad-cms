import {createReadStream} from 'node:fs'
import {access} from 'node:fs/promises'
import path from 'node:path'

import {getCliClient} from 'sanity/cli'

type SeedEvent = {
  id: string
  title: string
  description: string
  imageFileName: string
}

const seedEvents: SeedEvent[] = [
  {
    id: 'event-preview-law-alumni-mentoring-programme',
    title: 'Law Alumni Mentoring Programme',
    description:
      'Designed around the concept of guidance and mentorship, involving alumni who are currently working as legal professionals in various fields of law as mentors for student participants.',
    imageFileName: 'LAMP.png',
  },
  {
    id: 'event-preview-alsa-social-village-project',
    title: 'ALSA Social Village Project',
    description:
      'Designed as a community service initiative carried out in rural areas. The program aims to contribute directly to village communities by implementing activities based on the four core pillars.',
    imageFileName: 'ASVP.png',
  },
  {
    id: 'event-preview-alsa-english-challenge',
    title: 'ALSA English Challenge',
    description:
      'A national annual english competition under the English Development Subdivision of the Academic Activities Division of ALSA LC Unpad that strives to create opportunities to train and sharpen the english skills, both spoken and written, of all students across Indonesia.',
    imageFileName: 'alsa-english-challenge.png',
  },
]

const client = getCliClient({
  apiVersion: '2026-04-18',
})

function getAssetPath(fileName: string) {
  return path.resolve(
    process.cwd(),
    '..',
    '..',
    'ALSALCUnpad-Demo',
    'alsa-next',
    'asset',
    fileName,
  )
}

async function ensureFileExists(filePath: string) {
  await access(filePath)
}

async function uploadImageAsset(fileName: string) {
  const filePath = getAssetPath(fileName)

  await ensureFileExists(filePath)

  return client.assets.upload('image', createReadStream(filePath), {
    filename: fileName,
  })
}

async function seedEvent(event: SeedEvent) {
  const asset = await uploadImageAsset(event.imageFileName)

  return client.createOrReplace({
    _id: event.id,
    _type: 'event_preview',
    event_title: event.title,
    event_description: event.description,
    event_image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    created_at: new Date().toISOString(),
  })
}

async function run() {
  console.log(`Seeding ${seedEvents.length} event preview documents...`)

  for (const event of seedEvents) {
    const document = await seedEvent(event)
    console.log(`Seeded ${document._id} (${event.title})`)
  }

  console.log('Event preview seed complete.')
}

run().catch((error) => {
  console.error('Failed to seed event preview documents.')
  console.error(error)
  process.exit(1)
})