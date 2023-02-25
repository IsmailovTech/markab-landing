import { useState } from 'react'
import Footers from './components/Footer/Footers'
import FormInfos from './components/FormInfo/FormInfos'
import MobileFilters from './components/MobileFilter/MobileFilters'
import Navbar from './components/Navbar/Navbar'
import TestFilter from './components/TestFilter'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './components/message' // import messages for the component

function App() {
  const [locale, setLocale] = useState('uz')
  function handleLocaleChange() {
    const newLocale = locale === 'uz' ? 'ru' : 'uz'
    setLocale(newLocale)
  }
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <Navbar handleLocaleChange={handleLocaleChange} />
        <MobileFilters />
        <FormInfos />
        {/* <Footers /> */}
      </div>
    </IntlProvider>
  )
}

export default App
