import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: ({ req: { user } }) => {
      if (!Boolean(user)) return true
      if (user?.subDomain) {
        return {
          subDomain: {
            equals: user.subDomain,
          },
        }
      }
      return true
    },
    create: ({ req: { user } }) => {
      return Boolean(user)
    },
    update: ({ req: { user } }) => {
      return Boolean(user)
    },
    delete: ({ req: { user } }) => {
      return Boolean(user)
    },
  },

  fields: [
    // subDomain
    {
      name: 'subDomain',
      label: 'SubDomain',
      type: 'text',
      required: true,
      defaultValue: (req: { user: { subDomain: string } }) => {
        return req.user.subDomain
      },
      admin: {
        readOnly: true,
      },
      saveToJWT: true,
    },

    // Product Name
    {
      name: 'name',
      label: 'Product Name',
      type: 'text',
      required: true,
    },

    // Description
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },

    // Product Images
    {
      name: 'images',
      label: 'Product Images',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // Assuming a media collection exists
          required: true,
        },
      ],
    },

    // Price Field
    {
      name: 'price',
      label: 'Price (in Rupees)',
      type: 'number',
      required: true,
      admin: {
        description: 'Enter the product price.',
      },
    },

    // Discounted Price
    {
      name: 'discountPrice',
      label: 'Discount Price',
      type: 'number',
      admin: {
        description: 'Discounted price, if any. Leave blank if no discount.',
      },
    },

    // Category
    {
      name: 'category',
      label: 'Category',
      type: 'relationship',
      relationTo: 'categories',
      // required: true,
    },

    // Tags for Filtering
    {
      name: 'tags',
      label: 'Tags',
      type: 'text',
      hasMany: true,
    },

    // Publish Date
    {
      name: 'publishedDate',
      label: 'Published Date',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },

    // SEO Meta Data
    {
      name: 'seo',
      label: 'SEO',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          label: 'Meta Title',
          type: 'text',
          required: true,
        },
        {
          name: 'metaDescription',
          label: 'Meta Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text',
          hasMany: true,
          required: true,
        },
      ],
    },
  ],
}

export default Products
