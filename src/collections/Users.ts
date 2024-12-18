import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  // auth: {
  //   // disableLocalStrategy: true, // Disable default email/password strategy

  //   strategies: [
  //     {
  //       name: 'custom-auth',
  //       authenticate: async ({ payload, headers }) => {
  //         console.log('strategy payload:  ', payload)
  //         console.log('strategy headers: ', headers)

  //         const userQuery = await payload.find({
  //           collection: 'users',
  //           where: {
  //             email : {
  //               equals: headers.get('email')
  //             }
  //           }
  //         })

  //         const user = userQuery.docs[0] || null;
  //         return {
  //           user: {
  //             ...user,
  //             collection: 'users', // Add the collection property
  //           },
  //           responseHeaders: new Headers({
  //             'X-Custom-Header': 'Authenticated',
  //           }),
  //         }
  //       },
  //     },
  //   ],
  // },
  // auth: {
  //   // disableLocalStrategy: true,
  //   strategies: [
  //     {
  //       name: 'custom-auth',
  //       authenticate: async ({
  //         payload,
  //         headers,
  //       }: AuthStrategyFunctionArgs): Promise<AuthStrategyResult> => {
  //         console.log('payload, headers', payload, headers)
  //         const usersQuery = await payload.find({
  //           collection: 'users',
  //         })
  //         return {
  //           user: {
  //             ...usersQuery.docs[0],
  //             collection: 'users', // Add the collection property
  //           } as User,
  //           responseHeaders: headers,
  //         }
  //       },
  //     },
  //   ],
  // },
  fields: [
    {
      name: 'subDomain',
      type: 'text',
      unique: true,
      saveToJWT: true,
      required: true,
      // saveToJWT
    },
  ],
}
