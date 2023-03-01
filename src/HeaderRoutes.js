import React from 'react'
import FormInfos from './components/FormInfo/FormInfos'
import MobileFilters from './components/MobileFilter/MobileFilters'

function HeaderRoutes({
  setChosedColor,
  setChosedModel,
  chosedColor,
  chosedModel,
  locale,
}) {
  return (
    <>
      <FormInfos
        chosedColor={chosedColor}
        chosedModel={chosedModel}
        setChosedColor={setChosedColor}
        setChosedModel={setChosedModel}
        locale={locale}
      />
    </>
  )
}

export default HeaderRoutes
