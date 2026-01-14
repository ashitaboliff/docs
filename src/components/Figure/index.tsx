import style from './styles.module.css'

type Props = {
	src: string
	alt?: string
	caption?: string
}

function Figure({ src, alt, caption }: Props) {
	return (
		<figure className={style.figure}>
			<img src={src} alt={alt} />
			{caption && (
				<figcaption className={style.figcaption}>{caption}</figcaption>
			)}
		</figure>
	)
}

export default Figure
