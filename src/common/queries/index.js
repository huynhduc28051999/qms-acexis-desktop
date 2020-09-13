import gql from 'graphql-tag'

export const GET_KIOSK_BY_IPADDRESS = gql`
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
    }
  }
`
export const GET_NUMBERING_BY_COUNTER = gql`
  query ($code: String!) {
    numberingByCounter(code: $code) {
      _id
      idQueue
      number
      state
      createdAt
      updatedAt
      codeCounter
    }
  }
`

export const GET_CUSTOMER = gql`
  query ($_id: ID!) {
    getCustomerById (_id: $_id) {
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

export const GET_COUNTERS_BY_QUEUE = gql`
  query ($idQueue: ID!) {
    getCountersByQueue (idQueue: $idQueue) {
      _id
      idQueue
      idAccount
      code
      isActive
      currentNumbering
      createdAt
      createdBy {
        username
        fullName
      }
    }
  }
`
export const CALL_MISSED_NUMBERING = gql`
  query ($idCounter: ID!) {
    callMissedNumbering(idCounter: $idCounter) {
      _id
      idQueue
      number
      state
      createdAt
      updatedAt
    }
  }
`

export const GET_QUEUE_BY_COUNTER = gql`
  query ($code: String!) {
    getQueueByCounter(code: $code) {
      _id
      idService
      index
      createdAt
    }
  }
`

export const GET_HISTORY_BY_COUNTER = gql`
  query ($idCounter: ID!){
    historiesByCounter(idCounter: $idCounter) {
      _id
      idCounter
      note
      createdAt
  }
}
`

export const GET_COUNTER_BY_ID = gql`
  query ($id: ID!) {
    getCounterById(_id: $id) {
      _id
      code
      idQueue
      createdAt
      account {
        fullName
        _id
        username
      }
    }
  }
`
export const GET_SERVICE = gql`
  query ($_id: ID!){
    getService(_id: $_id) {
      _id
      name
      code
      createdAt
    }
  }
`

export const GET_QUEUE_BY_ID = gql`
  query ($_id: ID!) {
    getQueueById (_id: $_id) {
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

export const GET_COUNTER_BY_ACCOUNT = gql`
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

export const GET_PERMISSION = gql`
  query ($_id: ID!) {
    getPermissionById (_id: $_id) {
      _id
      idParent
      code
      description
      isActive
      createdAt
      updatedAt
      codeParent
    }
  }
`

export const SEARCH_COUNTER_ACTIVE = gql`
  query ($idQueue: ID!, $keywords: String) {
    searchCounterActive(idQueue: $idQueue, keywords: $keywords) {
      _id
      idQueue
      idAccount
      code
      isActive
      currentNumbering
      createdAt
      createdBy {
        username
        fullName
      }
    }
  }
`
export const SEARCH_QUEUE = gql`
  query ($keywords: String) {
    searchQueue(keywords: $keywords) {
      _id
      code
      idService
      index
      createdAt
      createdBy {
        username
        fullName
      }
    }
  }
`
export const SEARCH_MEDIACONTENT = gql`
  query ($keywords: [String], $withId: Boolean) {
    searchMediaContent(keywords: $keywords, withId: $withId) {
      _id
      title
      content
      priority
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
export const GET_LCD_BY_ID = gql`
  query ($id: ID!) {
    getLCDById(_id: $id) {
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
      mediaContent {
        _id
        title
      }
    }
  }
`

export const GET_MEDIA_CONTENT = gql`
  query ($_id: ID!) {
    getMediaContent(_id: $_id) {
      _id
      title
      content
      priority
    }
  }
`

export const GET_COMPANY_BY_ID = gql`
  query ($_id: ID!){
    getCompanyById(_id: $_id) {
      _id
      isActive
      name
      code
      address
      phone
      logo
      letterMarkLogo
      banner
    }
  }
`

export const GET_KIOSK_BY_ID = gql`
  query ($_id: ID!) {
    getKioskById(_id: $_id) {
      _id
      idQueue
      title
      content
      isActive
      location
      IPaddress
      MACaddress
      queue {
        code
      }
      ticket {
        content
      }
    }
  }
`
