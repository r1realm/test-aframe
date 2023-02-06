import React from 'react'
import Items from './ItemsInfo'
import Item from './Item'

function ListItems() {

  const item = Items.map((e) => {
    return (
      <Item data={e} />
    )
  })

  return (
    item
  )
}

export default ListItems