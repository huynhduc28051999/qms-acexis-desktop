import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { Avatar } from 'antd'

const KioskLayout = (props) => {
  const {
    children,
    title,
    company
  } = props
  return (
    <div className="kiosk-wrapper">
      <div className="kiosk-nav">
        <div className="nav-wrapper">
          <div className="nav-logo nav-item">
            {company.code === 'ACEXIS' ? (
              <img src={company.logo} alt={company.name} width='200px' />
            )
              : (
                <Avatar src={company.logo || ''} size={80} />
              )}
          </div>
          <div className='nav-item company-name'>
            {company?.name}
          </div>
          <div className='nav-item'>
            <Link to="/login" className='btn-login'>
              Đăng nhập
            </Link>
          </div>
        </div>
        {title && (<h1 className="kiosk-code">{title}</h1>)}

      </div>
      <div className="kiosk-content">
        <div className="kiosk--content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default KioskLayout
