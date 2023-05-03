import { defineStore } from 'pinia'
import { ref } from 'vue'
import VPRoutes from '~pages'

type Meta = any

interface MetaArrayItem {
  path: any
  meta: Meta
}

interface MetaHash {
  [path: string]: Meta
}

export const usePostMetaStore = defineStore('post-meta', () => {
  const metaArray = ref<MetaArrayItem[]>([])
  const metaHash = ref<MetaHash>({})

  for (let item of <any>VPRoutes) {
    metaArray.value.push({
      path: item.path,
      meta: item.meta
    })
    metaHash.value[item.path] = item.meta
  }

  metaArray.value.sort((a: any, b: any): number => {
    const ta = new Date(b.meta.date).getTime()
    const tb = new Date(a.meta.date).getTime()
    return ta - tb
  })

  return { metaArray, metaHash }
})