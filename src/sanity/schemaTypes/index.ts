import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { subcategoryType } from './subcategoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, subcategoryType, postType, authorType],
}
