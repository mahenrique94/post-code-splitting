import React, { Suspense, lazy } from 'react'

import { Switch, Router, Route } from 'react-router'

import { history } from './history'

const HomeComponent = lazy(() => import('../components/HomeComponent'))

const AComponent = lazy(() => import('../components/AComponent'))
const BComponent = lazy(() => import('../components/BComponent'))
const CComponent = lazy(() => import('../components/CComponent'))

const Routes = () => (

    <Router history={ history }>
        <Switch>
            <Suspense fallback={ <h1>Rendering...</h1> }>
                <Route component={ () => <HomeComponent/> } exact path="/"/>
                <Route component={ () => <AComponent/> } exact path="/a"/>
                <Route component={ () => <BComponent/> } exact path="/b"/>
                <Route component={ () => <CComponent/> } exact path="/c"/>
            </Suspense>
        </Switch>
    </Router>

)

export default Routes
