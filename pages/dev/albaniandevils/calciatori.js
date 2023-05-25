import Head from 'next/head'
import Layout from '/components/Layout'
import Calciatori from '/dev/albaniandevils/Calciatori/Calciatori'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Page({data}) {
    return (
        <h1>CALCIATORI</h1>,
        <Calciatori data={data} />
    )
}

export async function getStaticProps() {
    const data = await fetcher('http://127.0.0.1:3098/cards.json')

    return {
        props: {
            data
        }
    }
}