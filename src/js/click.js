  const click = () => {
    const getTranslatedCoordsInSvgMap = (x, y) => {
      const svgMapBBox = elSvgMapWrapper.value.getBoundingClientRect()
      console.log('scg bbox : ', svgMapBBox)
      const svgX = x - svgMapBBox.left
      const svgY = y - svgMapBBox.top

      console.log('2. svgCoords : ', svgX, svgY)

      return [svgX, svgY]
    }

    const setSvgPointOnClick = evt => {
      const clickX = evt.clientX
      const clickY = evt.clientY

      console.log('1. click coords : ', clickX, clickY)
      // getTranslatedCoordsInSvgMap(clickX, clickY)

      const svgClickCoords = getTranslatedCoordsInSvgMap(clickX, clickY)

      elSvgClickIndicator.value.setAttribute('x', svgClickCoords[0])
      elSvgClickIndicator.value.setAttribute('y', svgClickCoords[1])
      // const a = `translate(${svgClickCoords[0]},${svgClickCoords[1]})`
      // console.log(a)
      // elSvgClickIndicator.value.setAttribute('transform', a)
    }

    elSvgMapWrapper.value.addEventListener('click', setSvgPointOnClick)
  }
