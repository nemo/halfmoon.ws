import React, { Component } from 'react'
import Head from 'next/head';
import Container from '../components/Container'
import styles from './principles.module.css'
import contentful, { processResponse as processContentfulResponse } from '../utils/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default class PrinciplesPage extends Component {
  static async getInitialProps () {

    const [
      page,
      principles,
      models
    ] = await Promise.all([
      contentful.getEntry('3AwwtAgiuRY4C9OoNBOsan'),
      contentful.getEntries({
        content_type: 'principle',
        order: 'sys.createdAt'
      }),
      contentful.getEntries({
        content_type: 'operatingModel'
      })
    ])

    return {
      page: processContentfulResponse(page)[0],
      principles: processContentfulResponse(principles),
      models: processContentfulResponse(models)
    }
  }

  render() {
    const { page, principles, models } = this.props

    return (
      <div>
        <Head>
          <title>Nima's Principles</title>
          <meta property="og:title" content="Nima's Principles" />
          <meta property="og:url" content="https://halfmoon.ws/principles" />
        </Head>

        <Container className={styles.principles}>
          <h1 className={styles.title}>{page.title}</h1>
          {documentToReactComponents(page.intro)}

          {principles.map(principle => (
            <div name={principle.slug} id={principle.slug} className={styles.principle}>
              <h1 className={styles.primary}>{principle.title}</h1>
              {documentToReactComponents(principle.content)}
            </div>
          ))}
        </Container>

        <Container>
          <h1 className={styles.title}>{page.modelTitle}</h1>
          {documentToReactComponents(page.modelIntro)}

          {models.map(model => (
            <div name={model.slug} id={model.slug}>
              <h1 className={styles.primary}>{model.name}</h1>
              {documentToReactComponents(model.description)}
              <div className={styles.divider}>● ● ●</div>
            </div>
          ))}
        </Container>
      </div>
    )
  }
}
