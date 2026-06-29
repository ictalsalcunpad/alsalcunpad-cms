import {createReadStream} from 'node:fs'
import {access} from 'node:fs/promises'
import path from 'node:path'

import {getCliClient} from 'sanity/cli'

type SeedPublication = {
  id: string
  month: string
  imageFileName: string
  linkDrive: string
  createdAt: string
}

const seedPublications: SeedPublication[] = [
  {
    id: 'publication-newsletter-march',
    month: 'March',
    imageFileName: 'NEWSLETTER-MARCH.png',
    linkDrive: 'https://drive.google.com/file/d/1DTVURd2HNM7kAxN1WZsnyrUmK1Rno4q4/view?usp=drive_link',
    createdAt: '2025-03-01T00:00:00.000Z',
  },
  {
    id: 'publication-newsletter-april',
    month: 'April',
    imageFileName: 'NEWSLETTER-APRIL.png',
    linkDrive: 'https://drive.google.com/file/d/1iE3rTPFYQFZYda6alHqPfhdIHY_MQs6q/view?usp=drive_link',
    createdAt: '2025-04-01T00:00:00.000Z',
  },
  {
    id: 'publication-newsletter-may',
    month: 'May',
    imageFileName: 'NEWSLETTER-MAY.png',
    linkDrive: 'https://drive.google.com/file/d/1QUOj1xmqX_WeI04Rhe-RSjiH2Vlv2SQx/view?usp=drive_link',
    createdAt: '2025-05-01T00:00:00.000Z',
  },
  {
    id: 'publication-newsletter-june',
    month: 'June',
    imageFileName: 'NEWSLETTER-JUNE.png',
    linkDrive: 'https://drive.google.com/file/d/1f1nnygsYWS1gkgp_ZgGCUXQwySBFIcDC/view?usp=drive_link',
    createdAt: '2025-06-01T00:00:00.000Z',
  },
  {
    id: 'publication-newsletter-july',
    month: 'July',
    imageFileName: 'NEWSLETTER-JULY.png',
    linkDrive: 'https://drive.google.com/file/d/1hDZb5c_CvKxXVkMd4BTaKS8hWjsIuymR/view?usp=drive_link',
    createdAt: '2025-07-01T00:00:00.000Z',
  },
  {
    id: 'publication-newsletter-august',
    month: 'August',
    imageFileName: 'NEWSLETTER-AUGUST.png',
    linkDrive: 'https://drive.google.com/file/d/1ea7PPBYTy3srQCWmvpYj33rWdyFiyyyF/view?usp=drive_link',
    createdAt: '2025-08-01T00:00:00.000Z',
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

async function seedPublication(publication: SeedPublication) {
  const asset = await uploadImageAsset(publication.imageFileName)

  return client.createOrReplace({
    _id: publication.id,
    _type: 'publication',
    poster_image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    link_drive: publication.linkDrive,
    periode: '2024/2025',
    created_at: publication.createdAt,
  })
}

async function run() {
  console.log(`Seeding ${seedPublications.length} publication documents...`)

  for (const publication of seedPublications) {
    const document = await seedPublication(publication)
    console.log(`Seeded ${document._id} (${publication.month})`)
  }

  console.log('Publication seed complete.')
}

run().catch((error) => {
  console.error('Failed to seed publication documents.')
  console.error(error)
  process.exit(1)
})