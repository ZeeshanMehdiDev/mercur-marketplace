import { SellerDTO } from '#/modules/seller/types'

import { MedusaContainer } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'

export const fetchSellerByAuthActorId = async (
  authActorId: string,
  scope: MedusaContainer,
  fields: string[] = ['id']
): Promise<SellerDTO> => {
  const query = scope.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [seller]
  } = await query.graph({
    entity: 'seller',
    filters: {
      members: {
        id: authActorId
      }
    },
    fields
  })
  return seller
}
