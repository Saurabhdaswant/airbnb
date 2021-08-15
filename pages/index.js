import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Card from '../components/Card'
import SmallCard from '../components/SmallCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({exploreData , CardsData}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header/>
       <Banner/> 

       <main className=" max-w-8xl   mx-auto  px-8 sm:px-16" >
         <section className="pt-6">
           <h2 className=" text-2xl font-bold md:text-4xl  pb-5">
             Explore Nearby
           </h2>

           {/* Pull some data from a server - API endpoints */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
           {
             exploreData?.map(({location , img , distance })=> {
               return <SmallCard key={img} location={location} img={img} distance={distance} />
             })
           }
           </div>
         </section>
         <section>
           <h2 className=" text-2xl font-bold md:text-4xl  py-8 " >Live AnyWhere</h2>
           <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 " >
           {
            CardsData?.map(({title , img})=> {
              return <Card key={img} title={title} img={img} />
            })
           }
           </div>
         </section>
         <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="WishLists curated by Airbnb." buttonText="Get Inspired" />
       </main>
       <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch("https://links.papareact.com/pyp")
  .then( (res) => res.json() );

  const CardsData = await  fetch("https://links.papareact.com/zp1")
  .then((res)=> res.json());

  return {
    props : {
      exploreData,
      CardsData
    }
  }
}