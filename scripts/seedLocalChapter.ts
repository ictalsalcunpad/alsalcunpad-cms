import {getCliClient} from 'sanity/cli'

type SeedLocalChapter = {
  id: string
  order: number
  universityName: string
  instagramUrl: string
  logoUrl: string
  logoFileName: string
}

const localChapters: SeedLocalChapter[] = [
  {
    id: 'local-chapter-universitas-syiah-kuala',
    order: 1,
    universityName: 'Universitas Syiah Kuala',
    instagramUrl: 'https://www.instagram.com/alsalcusk',
    logoUrl:
      'https://static.wixstatic.com/media/a0626a_19fbd22068c94ccfac5b766b3482e468~mv2.png/v1/fill/w_296,h_278,al_c,q_90/LOGO%20UNSYIAH.png',
    logoFileName: 'logo-universitas-syiah-kuala.png',
  },
  {
    id: 'local-chapter-universitas-indonesia',
    order: 2,
    universityName: 'Universitas Indonesia',
    instagramUrl: 'https://www.instagram.com/alsalcui',
    logoUrl:
      'https://static.wixstatic.com/media/a0626a_c56b0f65c5fc499daedbedf92197d3f0~mv2.png/v1/fill/w_286,h_304,al_c,q_90/Makara_UI.png',
    logoFileName: 'logo-universitas-indonesia.png',
  },
  {
    id: 'local-chapter-universitas-gadjah-mada',
    order: 3,
    universityName: 'Universitas Gadjah Mada',
    instagramUrl: 'https://www.instagram.com/alsalcugm',
    logoUrl:
      'https://static.wixstatic.com/media/a0626a_947a417c9d33471db521a3dbb763e5f8~mv2.png/v1/fill/w_326,h_316,al_c,q_90/Logo_Universitas_Gadjah_Mada.png',
    logoFileName: 'logo-universitas-gadjah-mada.png',
  },
  {
    id: 'local-chapter-universitas-brawijaya',
    order: 4,
    universityName: 'Universitas Brawijaya',
    instagramUrl: 'https://www.instagram.com/alsalcub',
    logoUrl:
      'https://static.wixstatic.com/media/a0626a_a3aa4ac6fa8143cb967c9bb054186199~mv2.png/v1/fill/w_288,h_288,al_c,q_90/1200px-Logo_Universitas_Brawijaya_svg_pn.png',
    logoFileName: 'logo-universitas-brawijaya.png',
  },
  {
    id: 'local-chapter-universitas-mulawarman',
    order: 5,
    universityName: 'Universitas Mulawarman',
    instagramUrl: 'https://www.instagram.com/alsalcunmul',
    logoUrl:
      'https://static.wixstatic.com/media/dbad2d_fa7039c431184111a3e2335c0746de8c~mv2.png/v1/fill/w_314,h_314,al_c,q_90/1200px-Unmul_logo_low_svg.png',
    logoFileName: 'logo-universitas-mulawarman.png',
  },
  {
    id: 'local-chapter-universitas-andalas',
    order: 6,
    universityName: 'Universitas Andalas',
    instagramUrl: 'https://www.instagram.com/alsalcunand',
    logoUrl:
      'https://static.wixstatic.com/media/dbad2d_ea0edd7c72fb431090742fa542b07f1d~mv2.png/v1/crop/x_14,y_0,w_386,h_400/fill/w_294,h_304,al_c,q_90/Unand.png',
    logoFileName: 'logo-universitas-andalas.png',
  },
  {
    id: 'local-chapter-universitas-padjadjaran',
    order: 7,
    universityName: 'Universitas Padjadjaran',
    instagramUrl: 'https://www.instagram.com/alsalcunpad',
    logoUrl:
      'https://static.wixstatic.com/media/a0626a_c2bf396135d4467b9f9182a9d4210ca6~mv2.png/v1/fill/w_290,h_278,al_c,q_90/UNPADDD.png',
    logoFileName: 'logo-universitas-padjadjaran.png',
  },
  {
    id: 'local-chapter-universitas-diponegoro',
    order: 8,
    universityName: 'Universitas Diponegoro',
    instagramUrl: 'https://www.instagram.com/alsalcundip',
    logoUrl:
      'https://static.wixstatic.com/media/a0626a_8d94420fe5184ebe86d01b745835dcc0~mv2.png/v1/fill/w_260,h_304,al_c,q_90/Undip%20%281%29.png',
    logoFileName: 'logo-universitas-diponegoro.png',
  },
  {
    id: 'local-chapter-universitas-jember',
    order: 9,
    universityName: 'Universitas Jember',
    instagramUrl: 'https://www.instagram.com/alsalcuj',
    logoUrl:
      'https://static.wixstatic.com/media/a0626a_e4abfb8b82de45749a245326b8492ed1~mv2.png/v1/fill/w_282,h_278,al_c,q_90/logo-unej-baku.png',
    logoFileName: 'logo-universitas-jember.png',
  },
  {
    id: 'local-chapter-universitas-hasanuddin',
    order: 10,
    universityName: 'Universitas Hasanuddin',
    instagramUrl: 'https://www.instagram.com/alsalcunhas',
    logoUrl:
      'https://static.wixstatic.com/media/a0626a_99691eb373ee43e6b9068d9c80bd4b4b~mv2.png/v1/fill/w_264,h_314,al_c,q_90/UNHAS_LOGO.png',
    logoFileName: 'logo-universitas-hasanuddin.png',
  },
  {
    id: 'local-chapter-universitas-sriwijaya',
    order: 11,
    universityName: 'Universitas Sriwijaya',
    instagramUrl: 'https://www.instagram.com/alsalcunsri',
    logoUrl:
      'https://static.wixstatic.com/media/dbad2d_bc62a9dc8cdd4f25915a54e6e30ad4f6~mv2.png/v1/fill/w_300,h_268,al_c,q_90/Unsri.png',
    logoFileName: 'logo-universitas-sriwijaya.png',
  },
  {
    id: 'local-chapter-universitas-jenderal-soedirman',
    order: 12,
    universityName: 'Universitas Jenderal Soedirman',
    instagramUrl: 'https://www.instagram.com/alsalcunsoed',
    logoUrl:
      'https://static.wixstatic.com/media/a0626a_7018bb3f705244858ef84965cf9c9ddb~mv2.png/v1/fill/w_280,h_278,al_c,q_90/Logo_UNSOED_Now.png',
    logoFileName: 'logo-universitas-jenderal-soedirman.png',
  },
  {
    id: 'local-chapter-universitas-airlangga',
    order: 13,
    universityName: 'Universitas Airlangga',
    instagramUrl: 'https://www.instagram.com/alsalcunair',
    logoUrl:
      'https://static.wixstatic.com/media/a0626a_ecc0eea39ced4549818d134197766ebb~mv2.png/v1/fill/w_288,h_288,al_c,q_90/Universitas_Airlangga_svg.png',
    logoFileName: 'logo-universitas-airlangga.png',
  },
  {
    id: 'local-chapter-universitas-udayana',
    order: 14,
    universityName: 'Universitas Udayana',
    instagramUrl: 'https://www.instagram.com/alsalcunud',
    logoUrl:
      'https://static.wixstatic.com/media/a0626a_d65684e9f17247dd8f54d10701c0c372~mv2.png/v1/fill/w_278,h_278,al_c,q_90/Udayana_University_Seal.png',
    logoFileName: 'logo-universitas-udayana.png',
  },
  {
    id: 'local-chapter-universitas-sam-ratulangi',
    order: 15,
    universityName: 'Universitas Sam Ratulangi',
    instagramUrl: 'https://www.instagram.com/alsalcunsrat',
    logoUrl:
      'https://static.wixstatic.com/media/a0626a_56600a36a6cb46fbaa066d824107b56e~mv2.png/v1/fill/w_278,h_278,al_c,q_90/Logo_unsrat.png',
    logoFileName: 'logo-universitas-sam-ratulangi.png',
  },
]

const client = getCliClient({
  apiVersion: '2026-04-18',
})

async function uploadRemoteLogo(chapter: SeedLocalChapter) {
  const response = await fetch(chapter.logoUrl)

  if (!response.ok) {
    throw new Error(`Failed to download ${chapter.logoFileName}: ${response.status}`)
  }

  const arrayBuffer = await response.arrayBuffer()

  return client.assets.upload('image', Buffer.from(arrayBuffer), {
    filename: chapter.logoFileName,
  })
}

async function seedLocalChapter(chapter: SeedLocalChapter) {
  const asset = await uploadRemoteLogo(chapter)

  return client.createOrReplace({
    _id: chapter.id,
    _type: 'local_chapter',
    university_name: chapter.universityName,
    instagram_url: chapter.instagramUrl,
    order: chapter.order,
    logo: {
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
  console.log(`Seeding ${localChapters.length} local chapter documents...`)

  for (const chapter of localChapters) {
    const document = await seedLocalChapter(chapter)
    console.log(`Seeded ${document._id} (${chapter.universityName})`)
  }

  console.log('Local chapter seed complete.')
}

run().catch((error) => {
  console.error('Failed to seed local chapter documents.')
  console.error(error)
})
