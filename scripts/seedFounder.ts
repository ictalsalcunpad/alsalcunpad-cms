import {createReadStream} from 'node:fs'
import {access} from 'node:fs/promises'
import path from 'node:path'

import {getCliClient} from 'sanity/cli'

type SeedFounder = {
  id: string
  nama: string
  jabatan: string | null
}

const seedFounders: SeedFounder[] = [
  {
    id: 'founder-1',
    nama: 'Dr. Ahmad Yani',
    jabatan: 'Pendiri ALSA',
  },
  {
    id: 'founder-2',
    nama: 'Prof. Bambang Sutrisno',
    jabatan: null,
  },
]

const client = getCliClient({
  apiVersion: '2026-04-18',
})

function getAssetPath(fileName: string) {
  return path.resolve(process.cwd(), 'static', fileName)
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

async function seedFounder(founder: SeedFounder) {
  const asset = await uploadImageAsset('tuypap.jpg')

  return client.createOrReplace({
    _id: founder.id,
    _type: 'founder',
    nama: founder.nama,
    jabatan: founder.jabatan,
    photo: {
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
  console.log(`Seeding ${seedFounders.length} founder documents...`)

  for (const founder of seedFounders) {
    const document = await seedFounder(founder)
    console.log(`Seeded ${document._id} (${founder.nama})`)
  }

  console.log('Founder seed complete.')
}

run().catch((error) => {
  console.error('Failed to seed founder documents.')
  console.error(error)
})
