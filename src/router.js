import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Login from "./routes/Login/index";
import submission from "./components/submissionAdd";
import Vote from "./routes/Todo/Vote";
import Home from "./routes/home";
import qualityEvaluation from "./routes/Todo/qualityEvaluation";
import ListInform from "./components/List/list";
import Layout from "./components/Layout";
import abc from "./components/oldBuilding";
import abcd from "./routes/oldBuilding/zgsq";
import abcde from "./routes/dbsy";
import Call from "./components/usualphone";
import loginFirst from "./routes/LoginFirst";
import Second from "./routes/Second";
import Anouce from "./components/anousement";
import CompanyInfo from "./components/companyinfo";
import Main from "./components/maindemo";
import Anoucecontent from "./components/anoucecontent";
import NeigoborInfo from "./components/neighborinfo";
import Rules from "./components/rules";
import Rulescontent from "./components/rulescontent";
import Message from "./routes/yeweihui/Message";
import Record from "./routes/yeweihui/Record";
import Details from "./routes/yeweihui/Details";
const RouterConfig = ({ history }) => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/" exact component={IndexPage} />

          <Route path="/main" component={Main} />

          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/list" component={ListInform} />
          <Route path="/a" component={submission} />
          <Route path="/b" component={Vote} />
          <Route path="/c" component={qualityEvaluation} />
          <Route path="/d" component={abc} />
          <Route path="/e" component={abcd} />
          <Route path="/f" component={abcde} />
          <Route path="/call" component={Call} />
          <Route path="/loginFirst" component={loginFirst} />
          <Route path="/second" component={Second} />
          <Route path="/companyinfo" component={CompanyInfo} />
          <Route path="/anouce" component={Anouce} />
          <Route path="/anoucecontent" component={Anoucecontent} />
          <Route path="/neighborinfo" component={NeigoborInfo} />
          <Route path="/rules" component={Rules} />
          <Route path="/rulescontent" component={Rulescontent} />
          <Route path="/aha" component={Message} />
          <Route path="/ahb" component={Record} />
          <Route path="/ahc" component={Details} />
          <Route />
        </Switch>
      </Layout>
    </Router>
  );
};

export default RouterConfig;
