import React from 'react'
import { Entity } from 'aframe-react'

function BuyMenu(isOpen) {
  



  return (
    <>
       <Entity
        id='planeCar'
        geometry='primitive: plane'
        material='color: black; opacity: 0.6'
        scale='1.09535 0.56937 0.5'
        position='-1.909 1.547 -0.319'
        rotation='0 26 0'
        visible= {`'${isOpen}'`}
        />

        <Entity
        id='addBtnCar'
        geometry='primitive: circle'
        material='color: lightgreen; opacity: 0.9'
        scale='0.065 0.065 0.065'
        position='-1.525 1.687 -0.461'
        rotation='0 26 0'
        visible={isOpen}
        />
        <a-text
        id='addCar' 
        value='+'
        position='-1.568 1.687 -0.435'
        rotation='0 26 0'
        width='3'
        visible={isOpen}
        />

        <Entity
        id='removeBtnCar'
        geometry='primitive: circle'
        material='color: lightgreen; opacity: 0.9'
        scale='0.065 0.065 0.065'
        position='-1.678 1.687 -0.386'
        rotation='0 26 0'
        visible={isOpen}
        />
        <a-text 
        id='remCar'
        value='-'
        position='-1.733 1.700 -0.360'
        rotation='0 26 0'
        visible={isOpen}
        />

        <Entity
        id='chartBtnCar'
        geometry='primitive: circle'
        // material='color: #d507e4; opacity:0.9'
        scale='0.065 0.065 0.065'
        position='-1.523 1.419 -0.464'
        rotation='0 26 0'
        visible={isOpen}
        />

          <a-text
              id='titleCar'
              value='Magician'
              rotation='0 26 0'
              position="-2.360 1.688 -0.098"
              scale="0.4 0.4 0.4"

          />

          <a-text
              id='priceCar'
              value='19.99'
              rotation='0 26 0'
              position="-1.860 1.399 -0.332"
              scale='0.4 0.4 0.4'
          />

          <a-text
              id='dataCar'
              value='dsafgegegeg'
              rotation='0 26 0'
              position='-2.348 1.567 -0.089'
              scale='0.4 0.4 0.4'
              width=" 2.42" />
    </>
  )
}

export default BuyMenu
