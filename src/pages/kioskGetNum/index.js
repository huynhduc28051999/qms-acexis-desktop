import { NONTAG_GET_KIOSK_BY_IPADDRESS, CREATE_NUMBERING, dotNotify } from '@common'
import KioskForm from '@components/kioskForm'
import KioskLayout from '@pages/kioskLayout'
import React from 'react'
import './index.scss'
import { PrintNumbering } from './print'
import { Button } from 'antd'
import { Client } from '@tools'
import { withQuery } from '@utils'

function KioskGetNum(props) {
  const { data: { getKioskByIPaddress }, company } = props
  const { params } = props.match
  const { pathname } = props.location
  const handleGetNum = async () => {
    try {
      const { data: { createNumbering = {} }, errors } = await Client.mutate({
        mutation: CREATE_NUMBERING,
        variables: {
          idQueue: getKioskByIPaddress.idQueue,
        }
      })
      if (createNumbering) {
        PrintNumbering({
          company,
          number: createNumbering.number,
          curNumber: createNumbering.curNumber,
          content: getKioskByIPaddress.ticket.content
        })
        dotNotify({
          title: 'Thành công',
          content: `Bạn đã tạo số ${createNumbering.number}`
        })
      } else {
        dotNotify({
          title: 'Lỗi',
          content: 'Có lỗi xảy ra trong quá trình tạo số'
        })
        console.log(errors)
      }
    } catch (error) {
      dotNotify({
        title: 'Lỗi',
        content: 'Có lỗi xảy ra trong quá trình tạo số'
      })
      console.log(error)
    }
  }
  return (
    <KioskLayout
      title={getKioskByIPaddress?.title || (params?.IPaddress ? "KIOSK NODE FOUND" : "")}
      company={company}
    >
      {
        getKioskByIPaddress?.IPaddress ? (
          <div className="get-num-content">
            <Button type="button" className="btn-get-num" onClick={handleGetNum}>
              {
                getKioskByIPaddress.content
              }
            </Button>
          </div>
        )
          : (
            <KioskForm to={pathname} />
          )
      }
    </KioskLayout>
  )
}

export default withQuery(KioskGetNum)({
  query: NONTAG_GET_KIOSK_BY_IPADDRESS,
  options: (props) => ({
    variables: { IPaddress: props?.match?.params?.IPaddress },
    fetchPolicy: 'no-cache'
  })
})