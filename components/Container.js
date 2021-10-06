
import Navigation from "../components/Nav"
import Head from "next/head"

const Container = ({children}) => {
  return (
    <>
      <Head>
        <title>NextJS</title>
      </Head>
      <Navigation />
      <div className="container m-auto">
        {children}
      </div>
    </>
  )
}

export default Container