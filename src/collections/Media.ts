import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  // access: {
  //   read: ({ req: { user } }) => {
  //     if (!Boolean(user)) return false
  //     console.log('user domain::::: ', user)

  //     if (user?.subDomain && 'http://localhost/'.includes(user?.subDomain)) {
  //       return true
  //     }
  //     return false
  //   },
  // },
  access: {
    read: ({ req: { user } }) => {
      if (!Boolean(user)) return false

      if (user?.subDomain) {
        return {
          alt: {
            equals: 'icon',
          },
        }
      }
      return false
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
