import React, { useMemo, useEffect } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { routersNotAuth } from '@configs'
import { Client } from '@tools'
import { GET_KIOSK_BY_IPADDRESS, NONTAG_GET_COMPANY_ACTIVE } from '@common'
import logo from '@assets/images/logo.png'
import { withQuery } from '@utils/'

const company = {
  name: 'ACEXIS | QMS',
  code: 'ACEXIS',
  address: '573/12 SU VAN HANH, WARD 13, DISTRICT 10, HCM CITY',
  logo,
  letterMarkLogo: logo,
  banner: logo
}

const Components = {}
routersNotAuth.forEach(route => {
  Components[route.component] = React.lazy(() => import(/* webpackPrefetch: true */ `@pages/${route.component}`))
  if (route.relations && route.relations.length) {
    route.relations.forEach(relation => {
      Components[relation.component] = React.lazy(() => import(/* webpackPrefetch: true */ `@pages/${relation.component}`))
    })
  }
})
const Home = React.lazy(() => import(`@pages/home`))

const Routers = props => {
  // console.log(Client);
  const { data, history, location } = props
  // const { isAuth } = useContext(CommonDispatch)
  const companyActive = useMemo(() => {
    const { getCompanyActive } = data
    if (!getCompanyActive) {
      return company
    }
    const url = `${window.location.origin}/images/qms/company`
    return {
      ...getCompanyActive,
      logo: `${url}/${getCompanyActive?.logo}`,
      letterMarkLogo: `${url}/${getCompanyActive?.letterMarkLogo}`,
      banner: `${url}/${getCompanyActive?.banner}`
    }
  }, [data.getCompanyActive])
  function getLocalIP() {
    return new Promise(((resolve, reject) => {
      // NOTE: window.RTCPeerConnection is 'not a constructor' in FF22/23
      const RTCPeerConnection = /* window.RTCPeerConnection || */ window.webkitRTCPeerConnection || window.mozRTCPeerConnection

      if (!RTCPeerConnection) {
        reject(new Error('Your browser does not support this API'))
      }

      const rtc = new RTCPeerConnection({ iceServers: [] })
      const addrs = {}
      addrs['0.0.0.0'] = false

      function grepSDP(sdp) {
          // const hosts = []
          let finalIP = ''
          sdp.split('\r\n').forEach((line) => {
            if (~line.indexOf('a=candidate')) { // eslint-disable-line no-bitwise
                const parts = line.split(' ')
                const addr = parts[4]
                const type = parts[7]
                if (type === 'host') {
                    finalIP = addr
                }
            } else if (~line.indexOf('c=')) { // eslint-disable-line no-bitwise
                const parts = line.split(' ')
                const addr = parts[2]
                finalIP = addr
            }
          })
          return finalIP
      }

      if (1 || window.mozRTCPeerConnection) { // FF [and now Chrome!] needs a channel/stream to proceed
          rtc.createDataChannel('', { reliable: false })
      }

      rtc.onicecandidate = (evt) => {
          // convert the candidate to SDP so we can run it through our general parser
          // see https://twitter.com/lancestout/status/525796175425720320 for details
          if (evt.candidate) {
            const addr = grepSDP(`a=${evt.candidate.candidate}`)
            resolve(addr)
          }
      }
      rtc.createOffer((offerDesc) => {
          rtc.setLocalDescription(offerDesc)
      }, (e) => { console.warn('offer failed', e) })
    }))
  }
  const fetchData = async (IPaddress) => {
    try {
      const { data: { getKioskByIPaddress = {} } } = await Client.query({
        query: GET_KIOSK_BY_IPADDRESS,
        variables: {
          IPaddress
        },
        fetchPolicy: 'no-cache'
      })

      if (getKioskByIPaddress.IPaddress) {
        if (location.pathname === '/login' || location.pathname === '/') {
          history.push(`getNum/${getKioskByIPaddress.IPaddress}`)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getLocalIP().then((ipAddr) => {
      fetchData(ipAddr) // 192.168.0.122
      // console.log(ipAddr)
    })
  }, [])
  return (
    <Switch>
      {routersNotAuth.map((route, idx) => (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          render={(routeProps) => {
            const Component = Components[route.component]
            return (
              <React.Suspense fallback={null}>
                <Component {...props} {...routeProps} company={companyActive}/>
              </React.Suspense>
            )
          }}
        />
      ))}
      {/* <Route
        path="/"
        render={() => {
          return (
            <React.Suspense fallback={Loading}>
              {
                isAuth ? (
                  <Layout {...props} company={companyActive}>
                    <AppComponent {...props} company={companyActive} />
                  </Layout>
                )
                  : (
                    <Redirect to={routersNotAuth[0].path} />
                  )
              }
            </React.Suspense>
          )
        }}
      /> */}
      <Route render={() => <>404</>} />
    </Switch>
  )
}

const AppRouters = withRouter(withQuery(Routers)({
  query: NONTAG_GET_COMPANY_ACTIVE,
  options: () => ({
    variables: {},
    fetchPolicy: 'network-only'
  })
}))

export { AppRouters }