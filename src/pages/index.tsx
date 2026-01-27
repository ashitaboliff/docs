import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import type { ReactNode } from 'react'

import styles from './index.module.css'

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext()
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/category/setup"
					>
						環境構築を始める 🚀
					</Link>
					<Link
						className="button button--secondary button--lg"
						to="/docs/category/web-development"
					>
						Web開発の基礎を学ぶ 📚
					</Link>
				</div>
			</div>
		</header>
	)
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext()
	return (
		<Layout
			title={siteConfig.title}
			description="信州大学工学部所属サークル あしたぼのホームページについて、その開発ドキュメントです。Web開発の根幹から、環境構築の方法、useEffectは使うなという話まで幅広く解説しています。"
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	)
}
