import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>first-post</title>
      </Head>
      <h1>Hello its first post</h1>
    </Layout>
  )
}