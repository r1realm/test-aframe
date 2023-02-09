import React, { useState } from 'react'
import ItemsInfo from './ItemsInfo'
import Item from './Item'


function ListItems() {

  const [selected, setSelected] = useState ('magician')

  const itemsMap = ItemsInfo.map((e) => {
    return (
      <Item data={e} selected={selected} setSelected={setSelected}/>
      )
  })

  return (
    itemsMap
  )
}

export default ListItems