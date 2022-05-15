import React from 'react'
import Layout from '../../components/Layout'
import Login from '../../components/Login'
import axios from '../../util/axios'
export default function LoginPage() {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}
//export async function getServerSideProps({ req }) {
//  if (typeof window !== 'undefined') {
//    const token = JSON.parse(localStorage.getItem('token'))
//    console.log('TOKEN=>', token)
//    if (token) {
//      return {
//        redirect: {
//          destination: '/',
//          permanent: false
//  
//        }
//      }
//  }
//  }
//
//  return {
//    props: {},
//  }
//}
//
//