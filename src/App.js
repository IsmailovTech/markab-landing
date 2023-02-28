import { useState } from 'react'
import Footers from './components/Footer/Footers'
import FormInfos from './components/FormInfo/FormInfos'
import MobileFilters from './components/MobileFilter/MobileFilters'
import Navbar from './components/Navbar/Navbar'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './components/message' // import messages for the component
import OrderResult from './components/OrderResult'
import { Route, Routes } from 'react-router-dom'
import HeaderRoutes from './HeaderRoutes'

function App() {
  const [locale, setLocale] = useState('uz')
  const [chosedColor, setChosedColor] = useState('')
  const [chosedModel, setChosedModel] = useState('')

  function handleLocaleChange() {
    const newLocale = locale === 'uz' ? 'ru' : 'uz'
    setLocale(newLocale)
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <Navbar handleLocaleChange={handleLocaleChange} />

        <Routes>
          <Route
            path="/"
            element={
              <HeaderRoutes
                setChosedColor={setChosedColor}
                setChosedModel={setChosedModel}
                chosedColor={chosedColor}
                chosedModel={chosedModel}
              />
            }
          />
          <Route
            path="/check_order_status/:id"
            element={<OrderResult userData={[]} setVerified={null} />}
          />
        </Routes>
        <Footers />
      </div>
    </IntlProvider>
  )
}

export default App
