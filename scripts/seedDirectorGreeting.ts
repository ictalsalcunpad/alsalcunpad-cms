import {createReadStream} from 'node:fs'
import {access} from 'node:fs/promises'
import path from 'node:path'

import {getCliClient} from 'sanity/cli'

const directorGreeting = {
  id: 'director-greeting-current',
  name: 'Muhammad Fadhlurrahman Wijaya',
  period: '2025-2026',
  greeting: `Assalamu'alaikum warahmatullahi wabarakatuh,

Shalom,
Om Swastiastu,
Namo Buddhaya,
Greetings Virtue.

Greetings, ALSA-ians!

        Welcome to the official website of ALSA Local Chapter Universitas Padjadjaran (ALSA LC Unpad). ALSA or Asian Law Students' Association is a non-political and non-profit organization that connects law students across Asia. ALSA consist of 18 National Chapters from various Asian countries and 1 Associate Chapter in the United Kingdom. In Indonesia, ALSA has 15 Local Chapters and ALSA LC Unpad is one of the Local Chapters which has stood strong for more than 24 years. ALSA has four pillars that represent the whole values of ALSA itself, which are Internationally Minded, Socially Responsible, Academically Committed, and Legally Skilled. These pillars are reflected in our members and are implemented through every activity we conduct.

      This website contains information about ALSA LC Unpad's work programs, the history of ALSA, the Local Board of ALSA LC Unpad, former Local Boards, and various resources that you can access anytime. We also feature one of our a work programs, "ALSA Legal Aid", where you can submit questions or concerns regarding current legal issues, and our academic team will assist you by providing appropriate guidance.

       Lastly, I am proud to present this website to you. I hope this website can broaden your insight of ALSA Local Chapter Universitas Padjadjaran.

Wassalamu'alaikum Warahmatullahi Wabarakatuh,
Shalom,
Om Shanti Shanti Shanti Om,
Namo Buddhaya.

Show your contribution,
develop your skills,
and connect to others.

ALSA, Always Be One!`,
}

const client = getCliClient({
  apiVersion: '2026-04-18',
})

function getDirectorImagePath() {
  return path.resolve(process.cwd(), '..', 'public', 'image.png')
}

async function ensureFileExists(filePath: string) {
  await access(filePath)
}

async function uploadDirectorImage() {
  const filePath = getDirectorImagePath()

  await ensureFileExists(filePath)

  return client.assets.upload('image', createReadStream(filePath), {
    filename: 'director-greeting.png',
  })
}

async function run() {
  console.log('Seeding director greeting document...')

  const asset = await uploadDirectorImage()
  const document = await client.createOrReplace({
    _id: directorGreeting.id,
    _type: 'director_greeting',
    name: directorGreeting.name,
    period: directorGreeting.period,
    greeting: directorGreeting.greeting,
    director_image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    created_at: new Date().toISOString(),
  })

  console.log(`Seeded ${document._id} (${directorGreeting.name})`)
  console.log('Director greeting seed complete.')
}

run().catch((error) => {
  console.error('Failed to seed director greeting document.')
  console.error(error)
})
