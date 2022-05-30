import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section className={utilStyles.headingMd}>
				<p>
					Yo! I'm Steve, a developer from the{' '}
					<a href="https://en.wikipedia.org/wiki/Rhode_Island">Ocean State</a>{' '}
					and a <a href="https://vetswhocode.io/">VetsWhoCode</a> alumni.
					Welcome to my digital garden, where you can find all of the tech
					related resources I've written.
				</p>
			</section>

			<section
				className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.marginTop3rem}`}
			>
				<ul className={utilStyles.list}>
					{allPostsData &&
						allPostsData.map(({ id, date, title }) => (
							<li className={utilStyles.listItem} key={id}>
								<Link href={`/posts/${id}`}>
									<a>{title}</a>
								</Link>
								<br />
								<small>
									<Date dateString={date} />
								</small>
							</li>
						))}
				</ul>
			</section>
		</Layout>
	)
}
