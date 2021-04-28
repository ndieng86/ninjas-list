
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
        <title>Ninjas List | Home</title>
    </Head>
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula dui, rutrum quis laoreet non, porttitor vel ante. Nullam consectetur pretium nunc, ut viverra mi venenatis nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas finibus efficitur dolor nec molestie. Maecenas ultrices ac erat nec eleifend. Fusce lacinia commodo ligula sit amet tristique. Donec eu feugiat dui. In sollicitudin augue at nulla cursus fermentum. Curabitur commodo odio nec suscipit luctus. In posuere lacus risus, id blandit urna pretium ut. In eleifend mi varius nisl feugiat consequat. Cras iaculis urna dui, at vehicula lacus elementum vitae. Ut aliquet tincidunt sollicitudin. In et gravida sem.</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula dui, rutrum quis laoreet non, porttitor vel ante. Nullam consectetur pretium nunc, ut viverra mi venenatis nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas finibus efficitur dolor nec molestie. Maecenas ultrices ac erat nec eleifend. Fusce lacinia commodo ligula sit amet tristique. Donec eu feugiat dui. In sollicitudin augue at nulla cursus fermentum. Curabitur commodo odio nec suscipit luctus. In posuere lacus risus, id blandit urna pretium ut. In eleifend mi varius nisl feugiat consequat. Cras iaculis urna dui, at vehicula lacus elementum vitae. Ut aliquet tincidunt sollicitudin. In et gravida sem.</p>
    <Link href="/ninjas" >
      <a className={styles.btn}>See Ninjas List</a>
    </Link>

    </div>
    </>
  )
}
