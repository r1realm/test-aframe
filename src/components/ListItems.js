import React from 'react'
import ItemsInfo from './ItemsInfo'
import Item from './Item'


function ListItems() {

  const itemsMap = ItemsInfo.map((e) => {
    return (
      <Item data={e} />
      )
  })

  return (
    itemsMap
  )
}

export default ListItems