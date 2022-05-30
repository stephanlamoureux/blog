import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Stephan Lamoureux'
export const siteTitle = 'Stephan Lamoureux'

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="preload"
					href="/fonts/Inter-VariableFont_slnt,wght.ttf"
					as="font"
					crossOrigin=""
				/>
				<meta name="description" content="Personal Blog of Stephan Lamoureux" />
				<meta
					property="og:image"
					content="https://nextjs-blog-two-puce-15.vercel.app/_next/image?url=%2Fimages%2Fprofile-pic.png&w=256&q=75"
				/>
				<meta property="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:image"
					content="https://nextjs-blog-two-puce-15.vercel.app/_next/image?url=%2Fimages%2Fprofile-pic.png&w=256&q=75"
				/>
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src="/images/profile-pic.png"
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<Image
									priority
									src="/images/profile-pic.png"
									className={utilStyles.borderCircle}
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLgName}>
							<Link href="/">
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	)
}
