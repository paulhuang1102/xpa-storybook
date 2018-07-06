import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { of } from 'rxjs/observable/of'
import * as countAction from '../store/actions/count';
import rootEpic from '../store/epics';

const Post = props => (
    <li>
        <Link as={props.slug} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

class Index extends React.Component {
    static async getInitialProps({ req, store }) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        const resultAction = await rootEpic(
            of(countAction.countInit$()),
            store
          ).toPromise()
        store.dispatch(resultAction);
        return { userAgent };
    }

    // componentDidMount() {
    //     this.props.countAction.countInit$();
    // }

    render() {
        return (
            <div>
                <Head>
                    <title>Hello</title>
                </Head>
                <div>
                    Hello {this.props.userAgent}
                </div>
                <div>
                    <img src="/static/cc.jpeg" alt="cat"/>
                </div>
                <div>
                    {this.props.count}
                    <button onClick={this.props.countAction.countAdd$}>click</button>
                </div>
                <ul>
                    <Post slug="1" title="Yet another post"/>
                    <Post slug="2" title="Second post"/>
                    <Post slug="3" title="Third post"/>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
     return {
        count: state.count.count
    }
};

const mapDispatchToProps = dispatch => (
    {
        countAction: bindActionCreators(countAction, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Index);