import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}




export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{`Imran's Blog`}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a Fullstack Developer, I use Django for Backend and React js for frontend.</p>
        <p>
          I'm currently learning different stacks for frontend I'll be updating more soon{' '} ......
        </p>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>

          ))}
        </ul>
      </section>
      </section>
    </Layout>
  )
}
