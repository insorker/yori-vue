import { defineStore } from 'pinia'
import { ref } from 'vue'
import VPRoutes from '~pages'

interface MetaPosts {
  id: number
  path: string
  meta: any
}

interface MetaPostsTable {
  [year: number]: { [month: number]: MetaPosts[] }
}

export const useMetaPostsStore = defineStore('meta-post', () => {
  const metaPosts = ref<Record<string, MetaPosts>>({})

  for (const item of <any>VPRoutes) {
    metaPosts.value[item.path] = {
      id: 0,
      path: item.path,
      meta: item.metaPosts
    }
  }

  return { metaPosts }
})

export const useMetaPostsTableStore = defineStore('meta-post-table', () => {
  const metaPostsTable = ref<MetaPostsTable>({})

  for (const item of <any>VPRoutes) {
    const year: number = -new Date(item.metaPosts.date).getFullYear()
    const month: number = -(new Date(item.metaPosts.date).getMonth() + 1)

    if (!metaPostsTable.value[year]) {
      metaPostsTable.value[year] = {}
    }
    if (!metaPostsTable.value[year][month]) {
      metaPostsTable.value[year][month] = []
    }

    metaPostsTable.value[year][month].push({
      id: item.id,
      path: item.path,
      meta: item.metaPosts
    })
  }

  for (const year in metaPostsTable.value) {
    for (const month in metaPostsTable.value[year]) {
      metaPostsTable.value[year][month].sort((a, b) => {
        const da = new Date(a.meta.date).getTime()
        const db = new Date(b.meta.date).getTime()
        return db - da
      })
    }
  }

  return { metaPostsTable }
})
