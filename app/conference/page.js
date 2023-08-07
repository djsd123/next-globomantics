import Link from 'next/link'
import Image from 'next/image'
import conferencePic from '../../images/media-image-1.jpg'
import styles from './conference.module.css'

const Page = () => {
    return (
        <>
            <div className={styles.bgWrap}>
                <Image
                    src={conferencePic}
                    alt={'Conference Pic'}
                    placeholder={'blur'}
                    quality={100}
                    sizes={'100vw'}
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                    >
                </Image>
            </div>
            <h1 className={styles.bgHeader}>Welcome to Globomantics Conference Page</h1>
            <h2 className={styles.bgText}>
                <Link href='/conference/speakers' className={styles.bgLinks}>
                    View Speakers
                </Link>
            </h2>
            <h2 className={styles.bgText}>
                <Link className={styles.bgLinks} href='/conference/sessions'>
                    View Sessions
                </Link>
            </h2>
        </>
    )
}

export default Page
