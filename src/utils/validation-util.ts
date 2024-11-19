import type { DevMapping } from '../types'

export const ValidationUtil = {
  isValidMapping(data: unknown): data is DevMapping {
    if (!data || typeof data !== 'object') return false

    const mapping = data as DevMapping
    return (
      'frontendDevelopers' in mapping &&
      'backendDevelopers' in mapping &&
      typeof mapping.frontendDevelopers === 'object' &&
      typeof mapping.backendDevelopers === 'object'
    )
  },
}
