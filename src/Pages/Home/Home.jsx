import React from 'react'
import Hero from './Hero'
import Marquee from './Marquee'
import Services from './TopTour'
import Watsapp from './Watsappbot'
import Think from './WhyUs'
import OurServices from './OurSErvices'
import OurJourney from './OurJourney'
import Testimonials from './Testimonials'

function Home() {
    return (
        <div>
            <Hero />
            <Marquee />
            <Watsapp />
            <Services />
            <Think />
            <OurServices />
            <OurJourney />
            <Testimonials />

        </div>
    )
}

export default Home
