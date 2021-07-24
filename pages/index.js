import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>HomePage</h1>
      <p> Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
          De carne lumbering animata corpora quaeritis.
          Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
          Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.
      </p>
      <Link href="/ninjas"><a>See All Products</a></Link>
      <Footer/>

    </div>

  )
}
