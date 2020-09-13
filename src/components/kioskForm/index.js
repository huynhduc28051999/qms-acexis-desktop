import { GET_KIOSK_BY_IPADDRESS } from '@common'
import { Form, Input, Button } from 'antd'
import { Client } from '@tools'
import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.scss'

const KioskForm =(props => {
  const [form] = Form.useForm()
  const { history, to } = props
  const { getFieldsError, validateFields } = form
  const fetchQueue = async (IPaddress) => {
    try {
      const { data: { getKioskByIPaddress = {} } } = await Client.query({
        query: GET_KIOSK_BY_IPADDRESS,
        variables: {
          IPaddress
        },
      })

      if (!getKioskByIPaddress?.IPaddress) {
        const notification = {
          title: 'Basic Notification',
          body: 'Short message part'
        }
        const myNotification = new window.Notification(notification.title, notification)
        // notification.bar({
        //   title: 'Failed!',
        //   type: 'error',
        //   content: 'Không tìm thấy mã',
        //   placement: 'bottomRight',
        //   theme: 'pharmacy'
        // })
      } else {
        // notification.bar({
        //   title: 'Success!',
        //   type: 'Success',
        //   content: 'OK!!!',
        //   placement: 'bottomRight',
        //   theme: 'pharmacy'
        // })
        history.push(`${to}/${getKioskByIPaddress.IPaddress}`)
      }
    } catch (error) {
      // notification.bar({
      //   title: 'Failed!',
      //   type: 'error',
      //   content: 'ERROR',
      //   placement: 'bottomRight',
      //   theme: 'pharmacy'
      // })
      console.log(error)
    }
  }

  const hasErrors = fieldsError => Object.keys(fieldsError).some(field => fieldsError[field])

  const handleSubmit = e => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        const { IPaddress } = values

        fetchQueue(IPaddress)
      } else {
        console.log(err)
      }
    })
  }

  return (
    <div className="kiosk-form">
      <h1>Vui lòng nhập địa chỉ Kiosk</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Item
          name='IPaddress'
          rules={[
            {
              required: true,
              messages: 'Vui lòng nhập địa chỉ kiosk'
            }
          ]}
        >
          <Input size="large" spellCheck={false} placeholder="Địa chỉ kiosk" />
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            disabled={hasErrors(getFieldsError())}
            style={{ width: "100%", height: 50 }}
          >
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})

export default withRouter(KioskForm)
