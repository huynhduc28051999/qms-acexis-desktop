export const NONTAG_GET_KIOSK_BY_IPADDRESS = `
  query ($IPaddress: String) {
    getKioskByIPaddress(IPaddress: $IPaddress) {
      _id
      idQueue
      title
      content
      isActive
      location
      IPaddress
      MACaddress
      createdAt
      updatedAt
      createdBy {
        username
        fullName
      }
      updatedBy {
        username
        fullName
      }
      ticket {
        content
      }
    }
  }
`

export const NONTAG_GET_CUSTOMERS = `
  query {
    getCustomers {
      _id
      fullname
      barCode
      identityCard
      address
      gender
      dateOfBirth
      phone
      createdAt
      createdBy {
        username
        fullName
      }
      updatedAt
      updatedBy {
        username
        fullName
      }
    }
  }
`

export const NONTAG_GET_QUEUE_BY_COUNTER = `
  query ($code: String!) {
    getQueueByCounter(code: $code) {
      _id
      idService
      index
      createdAt
    }
  }
`

export const NONETAG_GET_HISTORY_BY_COUNTER = `
  query ($idCounter: String!){
    historiesByCounter(idCounter: $idCounter) {
      _id
      idCounter
      note
      createdAt
  }
}
`

export const NONETAG_GET_HISTORY_BY_CODE_COUNTER = `
  query ($code: String!) {
    historiesByCodeCounter(code: $code) {
      _id
      idCounter
      note
      createdAt
    }
  }
`

export const NONTAG_GET_QUEUES = `
  query {
    getQueues {
      _id
      idService
      code
      nameService
      createdAt
      createdBy {
        username
        fullName
      }
    }
  }
`

export const NONTAG_GET_SERVICES = `
  query {
    getServices {
      _id
      code
      name
      createdAt
      createdBy {
        username
        fullName
      }
    }
  }
`

export const NONTAG_ALL_COUNTER = `
  query {
    getAllCounter {
      _id
      idQueue
      idAccount
      code
      createdAt
      createdBy {
        username
        fullName
      }
      queue {
        code
      }
      account {
        fullName
      }
    }
  }
`

export const NONTAG_ALL_QUEUE = `
  query {
    getAllQueue {
      _id
      code
    }
  }
`

export const NONTAG_DISPLAY_QUEUE_IN_LCD = `
  query ($MACaddress: String) {
    displayQueueInLCD(MACaddress: $MACaddress) 
  }
`

export const NONTAG_DATA_CREATE_COUNTER = `
  query {
    getAllQueue {
      _id
      code
    }
    getUsersAssignable {
      _id
      fullName
      username
    }
  }
`

export const NONTAG_GET_COUNTER_BY_ACCOUNT = `
  query {
    getCounterByCurrentUser {
      _id
      idQueue
      idAccount
      code
      isActive
      currentNumbering
      createdAt
      createdBy {
        _id
        fullName
        username
      }
    }
  }
`

export const NONTAG_GET_PERMISSIONS = `
  query {
    permissionsTree {
      _id
      key
      title
      children
      description
      createdAt
      updatedAt
    }
  }
`
export const NONTAG_GET_MEDIA_CONTENT = `
  query {
    getMediaContents {
      _id
      title
      content
      priority
      createdAt
      createdBy {
        _id
        username
        fullName
      }
      updatedBy {
        _id
        username
        fullName
      }
    }
  }
`

export const NONTAG_GET_LCDS = `
query {
  getLCDs {
    _id
    idQueue
    title
    content
    modeLayout
    footer
    isActive
    location
    IPaddress
    MACaddress
    createdBy { _id username fullName}
    createdAt
    updatedAt
    updatedBy { _id username fullName}
    queue {
      code
    }
  }
}
`

export const NONTAG_GET_COMPANIES = `
query {
  getCompanies {
    _id
    isActive
    name
    code
    address
    phone
    logo
    letterMarkLogo
    banner
    createdAt
    createdBy {
      _id
      username
      fullName
    }
  }
}
`
export const NONTAG_GET_KIOSKS = `
query {
  getKiosks {
    _id
    idQueue
    title
    content
    isActive
    location
    IPaddress
    MACaddress
    createdBy { _id username fullName}
    createdAt
    updatedAt
    updatedBy { _id username fullName}
    queue {
      code
    }
  }
}
`

export const NONTAG_GET_COMPANY_ACTIVE = `
  query {
    getCompanyActive {
      _id
      isActive
      name
      code
      address
      phone
      logo
      banner
      letterMarkLogo
    }
  }
`
