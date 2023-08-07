import { data } from "@/app/conference/speakers/page";
import styles from '../../conference.module.css'


const fetchSpeakerInfo = async (params) => {
    // API call, DB Query, fetch from the app

    return data.speakers?.find(
        (speaker) => speaker.name === decodeURI(params.slug)
    )
}


const Page = async ({ params }) => {
  const speakerInfo = await fetchSpeakerInfo(params)
  console.log(`Here is the data:\n ${speakerInfo.name}`)

  const { name, bio , sessions } = speakerInfo

    return (
        <div className={styles.infoContainer}>
            <h3 className={styles.titleText}>{name}</h3>
            <h5 className={styles.descText}>About: {bio}</h5>
            {sessions &&
                sessions.map(({ name, id }) => (
                    <div key={id}>
                        <h5 className={styles.descText}>Session: {name}</h5>
                    </div>
                ))}
        </div>
    )
}

export default Page
