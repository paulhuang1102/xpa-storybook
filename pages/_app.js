import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { configureStore } from '../store/configureStore';

export default withRedux(configureStore)(
    class enterApp extends App {
        static async getInitialProps({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
            }
        }

        render() {
            const { Component, pageProps, store } = this.props;
            return (
                <Container>
                    <Provider store={store}>
                        <Component {...pageProps}/>
                    </Provider>
                </Container>
            )
        }
    }
)



