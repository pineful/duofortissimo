// 빌드 결과(docs/)를 저장소 루트로 복사합니다.
// GitHub Pages가 어느 쪽을 서빙하든(/(root) 또는 /docs) 같은 사이트가 열리게 하기 위함입니다.
import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const repo = path.resolve(here, '..')
const docs = path.join(repo, 'docs')

const copyFile = async (from, to) => {
  await mkdir(path.dirname(to), { recursive: true })
  await cp(from, to, { recursive: true })
}

const items = await readdir(docs)
for (const item of items) {
  const from = path.join(docs, item)
  const to = path.join(repo, item)
  const info = await stat(from)
  if (info.isDirectory()) {
    await rm(to, { recursive: true, force: true })
    await mkdir(to, { recursive: true })
    await copyFile(from, to)
  } else {
    await copyFile(from, to)
  }
}

console.log(`synced ${items.length} items from docs/ to repository root`)
