import React from 'react'

const ordenRender = ({productos}) => {
  return (
    <div>
                                    <img src={productos.img} alt="" />
                            <h2> {productos.titulo} </h2>
    </div>
  )
}

export default ordenRender