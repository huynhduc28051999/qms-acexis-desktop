import gql from 'graphql-tag'

export const NUMERICAL_ORDER_SUBSCRIPTION = gql`
  subscription ($codeCounter: String!) {
    subscriptionNumerialOrder(codeCounter: $codeCounter) {
      _id
      codeCounter
      number
      state
      updatedAt
      createdAt
    }
  }
`
export const DISPLAY_LCD_SUBSCRIPTION = gql`
  subscription ($MACaddress: String!) {
    subscriptionDisplayLCD(MACaddress: $MACaddress) {
      counter {
        code
        currentNumberingResult {
          state
          number
        }
      }
      numbering {
        state
        number
      }
    }
  }
`
