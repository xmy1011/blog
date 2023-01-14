const RenderInputWithPlaceholder = (p) => {
  const renderFun = () => {
    console.log('renderFun' + p);
  }
  return {
    renderFun
  }
}

export default RenderInputWithPlaceholder;