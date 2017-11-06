import React from 'react';
import axios from 'axios';
import Posts from '../components/Posts';

import Layout from '../components/Layout';

import { environment, twitter } from '../lib/environment';

export default class Index extends React.Component {
  constructor(props) {
    super();
  }
  static async getInitialProps({ req }) {
    const protocol =
      req && req.headers.host.indexOf('localhost') > -1
        ? 'http'
        : req ? req.protocol : '';
    const baseURL = req
      ? `${protocol}://${req.headers.host}`
      : window.location.origin;
    const { data: posts } = await axios.get(`${baseURL}/api/posts`);
    return { posts, baseURL };
  }
  render() {
    const { posts = [], baseURL } = this.props;
    return (
      <Layout>
        <h2>Home {environment}</h2>
        <p>{twitter.key}</p>
        <Posts posts={posts} />
      </Layout>
    );
  }
}
