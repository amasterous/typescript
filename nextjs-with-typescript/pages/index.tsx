import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="utilsStyles.headingMd">
        <p>[ur self introduction</p>
        <p>
          wqeqeqeweqeweqe
          <a href="https://github.com">git</a>
        </p>
      </section>
    </Layout>
  );
}
