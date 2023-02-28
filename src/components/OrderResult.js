import React, { useState, useEffect } from 'react'
import Footers from './Footer/Footers'
import Navbar from './Navbar/Navbar'
import orderAccept from '../Assets/images/orderAccept.svg'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { FormattedMessage } from 'react-intl'

function OrderResult({ userData, setVerified }) {
  const [userData1, setUserData1] = useState([])
  const { id } = useParams()

  function postID2() {
    axios
      .post(
        `https://malika.itlink.uz/api/v1/order/status/${id}`,
        {},
        {
          auth: {
            username: 'ibrokhim',
            password: 'Bu8$G9VLY7^5',
          },
        },
      )
      .then((response) => {
        setUserData1(response.data)
        // setOrderId(null);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  console.log(1111, userData)

  useEffect(() => {
    postID2()
  }, [])
  // // const [userData, setuserData] = useState(null)
  // // const [orderId, setOrderId] = useState(null)

  // useEffect(() => {
  //   // Make API call to retrieve order status
  //   axios
  //     .post(
  //       `https://malika.itlink.uz/api/v1/order/status/${orderId}`,
  //       {},
  //       {
  //         auth: {
  //           username: 'ibrokhim',
  //           password: 'Bu8$G9VLY7^5',
  //         },
  //       },
  //     )
  //     .then((response) => {
  //       console.log(111111, response)
  //       // setuserData(response.data)
  //       // setOrderId(response.id)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }, [])

  // function postID() {
  //   axios
  //     .post(
  //       `markab-invest.uz/check_order_status/${orderId}`,
  //       {},
  //       {
  //         auth: {
  //           username: 'ibrokhim',
  //           password: 'Bu8$G9VLY7^5',
  //         },
  //       },
  //     )
  //     .then((response) => {
  //       console.log(111111, response)
  //       setuserData(response.data)
  //       setOrderId(response.id)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (orderId !== null) {
  //       window.open(`markab-invest.uz/check_order_status/${orderId}`)
  //     }
  //   }, 1000)
  // }, [orderId])

  function getMainPage() {
    if (id) {
      console.log('okay')
    } else {
      setVerified(null)
    }
  }
  return (
    <>
      <div className="w-full container mx-auto  px-2 sm:px-8 md:px-10 lg:px-24 xl:px-36 py-14">
        <div>
          {id ? (
            <p className="text-green-main font-semibold text-base sm:text-xl md:text-2xl">
              <FormattedMessage id="salom" />{' '}
              {userData1 && <span>{userData1.name}</span>}
            </p>
          ) : (
            <p className="text-green-main font-semibold text-base sm:text-xl md:text-2xl">
              <FormattedMessage id="salom" />{' '}
              {userData && <span>{userData.name}</span>}
            </p>
          )}

          {id ? (
            <p className="text-green-main font-semibold text-base sm:text-xl md:text-2xl">
              <FormattedMessage id="xarid" />{' '}
              {userData1 && <span>{userData1.phone}</span>}
            </p>
          ) : (
            <p className="text-green-main font-semibold text-base sm:text-xl md:text-2xl">
              <FormattedMessage id="xarid" />{' '}
              {userData && <span>{userData.phone}</span>}
            </p>
          )}

          <p className="text-green-main font-semibold text-base sm:text-xl md:text-2xl">
            <FormattedMessage id="muddat" />
            <span>3 oy</span>{' '}
          </p>
          <p className="text-green-main font-semibold text-base sm:text-xl md:text-2xl">
            <FormattedMessage id="oylik" /> <span> 5000000</span> so'm{' '}
          </p>
          <p className="text-green-main font-semibold text-base sm:text-xl md:text-2xl">
            <FormattedMessage id="boshlangich" /> <span>3000000</span> so'm{' '}
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
              <FormattedMessage id="bajarildi" />{' '}
              <span className="text-sm sm:text-xl">
                <FormattedMessage id="tezorada" />
              </span>
            </p>
          </div>

          <Link
            to="/"
            onClick={getMainPage}
            className="px-7 sm:px-10 py-3 sm:py-4 border border-green-main hover:bg-emerald-50 duration-100 text-green-main"
          >
            <FormattedMessage id="asosiy" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default OrderResult
