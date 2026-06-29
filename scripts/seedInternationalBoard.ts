import {createReadStream} from 'node:fs'
import {access} from 'node:fs/promises'
import path from 'node:path'

import {getCliClient} from 'sanity/cli'

type SeedInternationalBoard = {
  id: string
  nama: string
  jabatan: string | null
}

const seedInternationalBoards: SeedInternationalBoard[] = [
  {
    id: 'intl-board-1',
    nama: 'Siti Nurhaliza',
    jabatan: 'Presiden',
  },
  {
    id: 'intl-board-2',
    nama: 'Muhammad Rizki',
    jabatan: 'Wakil Presiden',
  },
  {
    id: 'intl-board-3',
    nama: 'Lina Wijaya',
    jabatan: 'Sekretaris Jenderal',
  },
  {
    id: 'intl-board-4',
    nama: 'Rendra Kusuma',
    jabatan: 'Bendahara',
  },
  {
    id: 'intl-board-5',
    nama: 'Ayu Rahmawati',
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

async function seedInternationalBoard(board: SeedInternationalBoard) {
  const asset = await uploadImageAsset('tuypap.jpg')

  return client.createOrReplace({
    _id: board.id,
    _type: 'international_board',
    nama: board.nama,
    jabatan: board.jabatan,
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
  console.log(`Seeding ${seedInternationalBoards.length} international board documents...`)

  for (const board of seedInternationalBoards) {
    const document = await seedInternationalBoard(board)
    console.log(`Seeded ${document._id} (${board.nama})`)
  }

  console.log('International board seed complete.')
}

run().catch((error) => {
  console.error('Failed to seed international board documents.')
  console.error(error)
})
