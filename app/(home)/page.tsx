import Banner from './components/Banner/Banner';
import Feature from './components/Feature/Feature';
import Hero from './components/Hero/Hero';
import Review from './components/Review/Review';
import Services from './components/Services/Services';

export default async function Home() {
  return (
    <>
     <Banner />
      <Hero />
      <Feature />
      <Services />
      <Review />
    </>
  )
}
