import { defineStore } from 'pinia'
import { ref } from 'vue'
import VPRoutes from '~pages'

export interface MetaPosts {
  path: string
  meta: any
}

export interface MetaPostsTable {
  [year: number]: { [month: number]: MetaPosts[] }
}

export const useMetaPostsStore = defineStore('meta-posts', () => {
  const metaPosts = ref<Record<string, MetaPosts>>({})

  for (const item of <any>VPRoutes) {
    metaPosts.value[item.path] = {
      path: item.path,
      meta: item.meta
    }
  }

  return { metaPosts }
})

export const useMetaPostsTableStore = defineStore('meta-posts-table', () => {
  const metaPostsTable = ref<MetaPostsTable>({})

  for (const item of <any>VPRoutes) {
    const year: number = new Date(item.meta.date).getFullYear()
    const month: number = new Date(item.meta.date).getMonth() + 1

    if (!metaPostsTable.value[year]) {
      metaPostsTable.value[year] = {}
    }
    if (!metaPostsTable.value[year][month]) {
      metaPostsTable.value[year][month] = []
    }

    metaPostsTable.value[year][month].push({
      path: item.path,
      meta: item.meta
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

export const useMetaPostsLatestStore = defineStore('meta-posts-latest', () => {
  const metaPostsArray = ref<MetaPosts[]>([])

  for (const item of <any>VPRoutes) {
    metaPostsArray.value.push({
      path: item.path,
      meta: item.meta
    })
  }

  metaPostsArray.value.sort((a, b) => {
    const da = new Date(a.meta.date).getTime()
    const db = new Date(b.meta.date).getTime()
    return db - da
  })
  const metaPostsLatest = metaPostsArray.value.slice(0, 4)

  return { metaPostsLatest }
})

export const useMetaSeriesStore = defineStore('meta-series', () => {
  const metaSeries = ref<Record<string, MetaPostsTable>>({})

  for (const item of <any>VPRoutes) {
    if ('series' in item.meta) {
      if (!(item.meta.series in metaSeries.value)) {
        metaSeries.value[item.meta.series] = {}
      }

      const year: number = new Date(item.meta.date).getFullYear()
      const month: number = new Date(item.meta.date).getMonth() + 1

      if (!metaSeries.value[item.meta.series][year]) {
        metaSeries.value[item.meta.series][year] = {}
      }
      if (!metaSeries.value[item.meta.series][year][month]) {
        metaSeries.value[item.meta.series][year][month] = []
      }

      metaSeries.value[item.meta.series][year][month].push({
        path: item.path,
        meta: item.meta
      })
    }
  }

  for (const series in metaSeries.value) {
    for (const year in metaSeries.value[series]) {
      for (const month in metaSeries.value[series][year]) {
        metaSeries.value[series][year][month].sort((a, b) => {
          const da = new Date(a.meta.date).getTime()
          const db = new Date(b.meta.date).getTime()
          return db - da
        })
      }
    }
  }

  return { metaSeries };
})
