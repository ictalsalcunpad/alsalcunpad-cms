import {createReadStream} from 'node:fs'
import {access} from 'node:fs/promises'
import path from 'node:path'

import {getCliClient} from 'sanity/cli'

type SeedNationalBoard = {
  id: string
  nama: string
  jabatan: string | null
}

const seedNationalBoards: SeedNationalBoard[] = [
  {
    id: 'nat-board-1',
    nama: 'Eka Prasetya',
    jabatan: 'Ketua Umum',
  },
  {
    id: 'nat-board-2',
    nama: 'Dina Kartika',
    jabatan: 'Wakil Ketua Umum',
  },
  {
    id: 'nat-board-3',
    nama: 'Hendra Sutanto',
    jabatan: 'Sekretaris',
  },
  {
    id: 'nat-board-4',
    nama: 'Intan Pratama',
    jabatan: 'Bendahara',
  },
  {
    id: 'nat-board-5',
    nama: 'Joko Widodo',
    jabatan: 'Ketua Divisi Akademik',
  },
  {
    id: 'nat-board-6',
    nama: 'Kirana Kusuma',
    jabatan: 'Ketua Divisi Internal',
  },
  {
    id: 'nat-board-7',
    nama: 'Luthfi Rahman',
    jabatan: 'Ketua Divisi Eksternal',
  },
  {
    id: 'nat-board-8',
    nama: 'Monica Setiawan',
    jabatan: null,
  },
  {
    id: 'nat-board-9',
    nama: 'Nanda Mahendra',
    jabatan: null,
  },
  {
    id: 'nat-board-10',
    nama: 'Olivia Hermanto',
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

async function seedNationalBoard(board: SeedNationalBoard) {
  const asset = await uploadImageAsset('tuypap.jpg')

  return client.createOrReplace({
    _id: board.id,
    _type: 'national_board',
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
  console.log(`Seeding ${seedNationalBoards.length} national board documents...`)

  for (const board of seedNationalBoards) {
    const document = await seedNationalBoard(board)
    console.log(`Seeded ${document._id} (${board.nama})`)
  }

  console.log('National board seed complete.')
}

run().catch((error) => {
  console.error('Failed to seed national board documents.')
  console.error(error)
})
