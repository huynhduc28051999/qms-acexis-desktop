
export const NONTAG_CREATE_NUMBERING = `
  mutation ($idQueue: ID!) {
    createNumbering(idQueue: $idQueue) {
      _id
      number
      state
      curNumber
      createdAt
      updatedAt
    }
  }
`

export const NONTAG_OPEN_COUNTER = `
  mutation ($code: String!){
    openCounter(code: $code) {
      _id
      idQueue
      idAccount
      code
      isActive
      currentNumbering
      createdAt
      createdBy {
        fullName
        username
      }
    }
  }
`
export const NONTAG_CREATE_LCD_SCREEN = `
  mutation ($input: LCDInput) {
    createLCD (input: $input) {
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
    }
  }
`

export const NONTAG_DELETE_LCD_SCREEN = `
  mutation ($ids: [ID!]) {
    deleteLCDs (ids: $ids)
  }
`

export const NONTAG_UPDATE_LCD_SCREEN = `
  mutation ($id: ID!, $input: LCDInput) {
    updateLCD (_id: $id, input: $input) {
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
    }
  }
`

export const NONTAG_DELETE_KIOSKS = `
  mutation ($ids: [ID!]) {
    deleteKiosks (ids: $ids)
  }
`

export const NONTAG_CREATE_KIOSK = `
  mutation ($ticketFormat: String!, $input: KioskInput) {
    createKiosk (ticketFormat: $ticketFormat, input: $input) {
      _id
      idQueue
      title
      content
      isActive
      location
      IPaddress
      MACaddress
      ticket {
        content
      }
    }
  }
`
export const NONTAG_DELETE_KIOSK = `
  mutation ($ids: [ID!]) {
    deleteKiosks (ids: $ids)
  }
`

export const NONTAG_UPDATE_KIOSK = `
  mutation ($id: ID!, $ticketFormat: String!, $input: KioskInput) {
    updateKiosk (_id: $id, ticketFormat: $ticketFormat, input: $input) {
      _id
      idQueue
      title
      content
      isActive
      location
      IPaddress
      MACaddress
      ticket {
        content
      }
    }
  }
`
