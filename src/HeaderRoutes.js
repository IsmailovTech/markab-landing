import React from 'react'
import FormInfos from './components/FormInfo/FormInfos'
import MobileFilters from './components/MobileFilter/MobileFilters'

function HeaderRoutes({
  setChosedColor,
  setChosedModel,
  chosedColor,
  chosedModel,
}) {
  return (
    <>
      <FormInfos
        chosedColor={chosedColor}
        chosedModel={chosedModel}
        setChosedColor={setChosedColor}
        setChosedModel={setChosedModel}
      />
    </>
  )
}

export default HeaderRoutes
