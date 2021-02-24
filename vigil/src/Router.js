import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import Components
import App from './components/App';
import Layout from './core/Layout';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Admin from "./core/Admin";
import Private from "./core/Private";
import PageNotFound from './core/PageNotFound';
import VigilList from './components/vigil-list';
import CreateVigil from './components/create-vigil';



// Import Protected Routes
import AdminRoute from './auth/AdminRoute'
import PrivateRoute from './auth/PrivateRoute'

const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route path="/" exact component={App} />
					<Route path="/signup" exact component={Signup} />
					<Route path="/signin" exact component={Signin} />
					<AdminRoute path="/admin" exact component={Admin} />
					<PrivateRoute path="/private" exact component={Private} />
					<PrivateRoute path="/vigil-list" exact component={VigilList} />
					<PrivateRoute path="/create-vigil" exact component={CreateVigil} />
					<Route path="*" exact component={PageNotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default Router;
