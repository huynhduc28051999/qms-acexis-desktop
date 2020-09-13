import gql from 'graphql-tag'

export const CREATE_CUSTOMER = gql`
  mutation($input: CustomerInput) {
    createCustomer(input: $input) {
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

export const DELETE_CUSTOMERS = gql`
  mutation($ids: [ID]) {
    deleteCustomers(ids: $ids)
  }
`

export const UPDATE_CUSTOMER = gql`
  mutation($idCustomer: ID!, $input: CustomerInput) {
    updateCustomer(idCustomer: $idCustomer, input: $input) {
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

export const OPEN_COUNTER = gql`
  mutation($code: String!) {
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

export const CLOSE_COUNTER = gql`
  mutation($idCounter: ID!) {
    closeCounter(idCounter: $idCounter)
  }
`

export const RETURN_TO_QUEUE = gql`
  mutation($idNumbering: ID!) {
    returnToQueue(idNumbering: $idNumbering)
  }
`

export const CHANGE_STATUS_COUNTER = gql`
  mutation($code: String!) {
    changeStatusCounter(code: $code)
  }
`

export const DISMISS_NUMBERING = gql`
  mutation($idNumbering: ID!) {
    dismissNumbering(idNumbering: $idNumbering)
  }
`

export const ASSIGN_TO_OTHER_COUNTER = gql`
  mutation($idCounter: ID!, $idNumbering: ID!, $idCounterReceive: ID!) {
    assignNumberingToCounter(
      idCounter: $idCounter
      idNumbering: $idNumbering
      idCounterReceive: $idCounterReceive
    )
  }
`

export const DELETE_COUNTERS = gql`
  mutation($ids: [ID]) {
    deleteCounters(ids: $ids)
  }
`

export const CREATE_COUNTER = gql`
  mutation($input: CounterInput) {
    createCounter(input: $input) {
      _id
      code
      idQueue
    }
  }
`
export const DELETE_SERVICES = gql`
  mutation($ids: [ID]) {
    deleteServices(ids: $ids)
  }
`

export const CREATE_SERVICE = gql`
  mutation($input: ServiceInput) {
    createService(input: $input) {
      _id
      name
      code
      createdAt
    }
  }
`

export const CREATE_QUEUE = gql`
  mutation($input: QueueInput) {
    createQueue(input: $input) {
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

export const UPDATE_COUNTER = gql`
  mutation($id: ID!, $input: CounterInput) {
    updateCounter(_id: $id, input: $input) {
      _id
      code
      idQueue
    }
  }
`
export const UPDATE_SERVICE = gql`
  mutation($_id: ID!, $input: ServiceInput) {
    updateService(_id: $_id, input: $input) {
      _id
      name
      code
      createdAt
    }
  }
`
export const UPDATE_QUEUE = gql`
  mutation($idQueue: ID!, $input: QueueInput) {
    updateQueue(idQueue: $idQueue, input: $input) {
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

export const DELETE_QUEUES = gql`
  mutation($ids: [ID]) {
    deleteQueues(ids: $ids)
  }
`

export const CREATE_PERMISSION = gql`
  mutation($input: InputPermission) {
    createPermission(input: $input) {
      _id
      idParent
      code
      description
      isActive
      codeParent
      createdAt
      updatedAt
    }
  }
`

export const UPDATE_PERMISSION = gql`
  mutation($idPermission: ID!, $input: InputPermission) {
    updatePermission(idPermission: $idPermission, input: $input) {
      _id
      idParent
      code
      description
      isActive
      codeParent
      createdAt
      updatedAt
    }
  }
`

export const DELETE_PERMISSIONS = gql`
  mutation($ids: [ID]) {
    deletePermissions(ids: $ids)
  }
`

export const CALL_NEXT_NUMBERING = gql`
  mutation($idCounter: ID!) {
    callNextNumbering(idCounter: $idCounter) {
      _id
      idQueue
      number
      state
      createdAt
      updatedAt
    }
  }
`
export const ACTIVE_LCD_SCREEN = gql`
  mutation($id: ID!, $isActive: Boolean) {
    changeTypeLCD(_id: $id, isActive: $isActive)
  }
`

export const DELETE_MEDIA_CONTENT = gql`
  mutation($ids: [ID]) {
    deleteMediaContent(ids: $ids)
  }
`

export const UPDATE_MEDIA_CONTENT = gql`
  mutation($_id: ID!, $input: MediaContentInput) {
    updateMediaContent(_id: $_id, input: $input) {
      _id
      title
      content
      priority
    }
  }
`

export const CREATE_MEDIA_CONTENT = gql`
  mutation($input: MediaContentInput) {
    createMediaContent(input: $input) {
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
    }
  }
`

export const DELETE_COMPANIES = gql`
  mutation($ids: [ID]) {
    deleteCompanies(ids: $ids)
  }
`

export const CREATE_COMPANY = gql`
  mutation($input: CompanyInput) {
    createCompany(input: $input) {
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

export const UPDATE_COMPANY = gql`
  mutation($_id: ID!, $input: CompanyInput) {
    updateCompany(_id: $_id, input: $input) {
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

export const UPLOAD_IMAGE_COMPANY = gql`
  mutation ($logoBase64: String, $bannerBase64: String, $letterMarkLogoBase64: String) {
    uploadImageCompany(logoBase64: $logoBase64, bannerBase64: $bannerBase64, letterMarkLogoBase64: $letterMarkLogoBase64) {
      logo
      letterMarkLogo
      banner
    }
  }
`
export const CREATE_NUMBERING = gql`
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