import Image from 'next/image'
import OurStoryPic from '../../images/home-image-2.jpg'
import styles from './home.module.css'


const Page = () => {
    return (
        <>
            <div className={styles.bgWrap}>
                <Image
                    src={OurStoryPic}
                    alt='Our story pic'
                    quality={100}
                    sizes={'100vw'}
                    fill
                    style={{
                        objectFit: 'cover',
                    }}>
                </Image>
            </div>
            <h1 className={styles.bgHeader}>Humble beginnings a story of life</h1>
            <p className={styles.bgText}>
                How we became the farmers of the future, tilling technology of
                tomorrow today.
            </p>
        </>
    )
}

export default Page
