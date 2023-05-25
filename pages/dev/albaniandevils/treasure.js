import Head from 'next/head'
import Layout from '/components/Layout'
import Treasure from '/dev/albaniandevils/TesoriSommersi/Treasure'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Page({data}) {
    return (
        <h1>TESORI SOMMERSI</h1>,
        <Treasure data={data} />
    )
}

export async function getStaticProps() {
    const data = await fetcher('http://127.0.0.1:3098/treasures.json')

    return {
        props: {
            data
        }
    }
}