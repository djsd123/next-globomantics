import styles from '../conference.module.css'
import Link from 'next/link'


const fetchSpeakers = async () => {
  const response = await fetch(
      'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json',
      { next: { revalidate: 20 }}
      )

    return await response.json()
}

export const data = await fetchSpeakers()

const Page = async () => {


    return (
        <div className={styles.parentContainer}>
            <div className={'self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'}>
                Last Rendered: {new Date().toLocaleTimeString()}
            </div>
            <h1>Welcome to Globomantics Speakers</h1>
            {data.speakers.map(({ id, name, bio }) => (
                <div key={id} className={styles.infoContainer}>
                    <Link href={`/conference/speakers/${name}`}
                          className={styles.bgLinks}
                    >
                        <h3 className={styles.titleText}>{name}</h3>
                    </Link>
                    <h5 className={styles.descText}>{bio}</h5>
                </div>
            ))}
        </div>
    )
}

export default Page
