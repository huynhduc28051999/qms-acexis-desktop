export const routersNotAuth = [
  {
    isExact: true,
    path: '/login',
    component: 'login'
  },
  {
    isExact: true,
    path: '/getNum/:IPaddress?',
    component: 'kioskGetNum'
  },
]

export const authenticatedRoutes = [
  {
    isExact: true,
    path: '/home',
    component: 'home'
  }
]
