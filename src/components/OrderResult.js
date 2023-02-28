import React, { useState, useEffect } from 'react'
import Footers from './Footer/Footers'
import Navbar from './Navbar/Navbar'
import orderAccept from '../Assets/images/orderAccept.svg'
import axios from 'axios'

function OrderResult() {
  const [orderStatus, setOrderStatus] = useState(null)

  useEffect(() => {
    // Make API call to retrieve order status
    axios
      .post(
        'https://malika.itlink.uz/api/v1/order/status/18',
        {},
        {
          auth: {
            username: 'ibrokhim',
            password: 'Bu8$G9VLY7^5',
          },
        },
      )
      .then((response) => {
        console.log(response.data)
        setOrderStatus(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <Navbar />
      <div className="w-full container mx-auto  px-2 sm:px-8 md:px-10 lg:px-24 xl:px-36 py-14">
        <div>
          <p className="text-green-main font-semibold text-base sm:text-xl md:text-2xl">
            ASSALOMU ALAYKUM {orderStatus && <span>{orderStatus.name}</span>}
          </p>
          <p className="text-green-main font-semibold text-base sm:text-xl md:text-2xl">
            XARIDINGIZ: {orderStatus && <span>{orderStatus.phone}</span>}
          </p>
          <p className="text-green-main font-semibold text-base sm:text-xl md:text-2xl">
            TO'LOV MUDDATI: <span>3 oy</span>{' '}
          </p>
          <p className="text-green-main font-semibold text-base sm:text-xl md:text-2xl">
            OYLIK TO'LOV: <span>5000000</span> so'm{' '}
          </p>
          <p className="text-green-main font-semibold text-base sm:text-xl md:text-2xl">
            BOSHLANG'ICH TO'LOV: <span>3000000</span> so'm{' '}
          </p>
        </div>

        <div className=" mt-12 sm:mt-20 md:mt-24 flex flex-col md:flex-row justify-between items-start gap-10 md:items-center">
          <div className="flex gap-4 sm:gap-10 items-center">
            <img
              src={orderAccept}
              alt="photo"
              className="w-[50px] sm:w-[65px] md:w-[72px]"
            />
            <p className="flex flex-col text-base sm:text-2xl sm:gap-2">
              Buyurtma muvaffaqiyatli bajariladi{' '}
              <span className="text-sm sm:text-xl">
                Tez orada siz bilan bog'lanamiz!
              </span>
            </p>
          </div>

          <button className="px-7 sm:px-10 py-3 sm:py-4 border border-green-main hover:bg-emerald-50 duration-100 text-green-main">
            Asosiy sahifaga o'ting
          </button>
        </div>
      </div>
      <Footers />
    </>
  )
}

export default OrderResult
