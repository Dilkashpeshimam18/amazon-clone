import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="" />
                <div className="home__row">
                    <Product id="1"
                    title="Think and Grow Rich (DELUXE HARDBOUND EDITION)"
                    price={900}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51NcIBUnokL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    rating={4} />
                    <Product  id="2"
                    title="ASUS ZenBook Duo Intel Core i5-10210U FHD Thin and Light Touch Laptop "
                    price={79490}
                    image="https://images-na.ssl-images-amazon.com/images/I/81K9Es2DDFL._AC_SL1500_.jpg"
                    rating={4} />
                    

                </div>
                <div className="home__row">
                    <Product id="3" title="GoSriKi Women's Rayon Anarkali Kurta with Gold Printed Dupatta"
                    price={599}
                    image="https://images-na.ssl-images-amazon.com/images/I/61Ov56SdKVS._AC_UL1024_.jpg"
                    rating={3} />
                   <Product  id="4" title="Citizen Eco-Drive Chronograph Men's Watch - CA4037-01W"
                    price={15000}
                    image="https://images-na.ssl-images-amazon.com/images/I/91h43v41moL._AC_UL1500_.jpg"
                    rating={5} />
                    
                    <Product id="5" title="Noise Air Buds Truly Wireless Earbuds with Mic for Crystal Clear Calls, HD Sound, Smart Touch and 20 Hour Playtime - ICY White"
                    price={2500}
                    image="https://images-na.ssl-images-amazon.com/images/I/51jR6miqHTS._AC_SL1500_.jpg"
                    rating={4} />
                </div>
                <div className="home__row">
                <Product id="6" title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
                    price={3499}
                    image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
                    rating={5} />
                <Product id="7" title=" Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)"
                    price={22490}
                    image="https://m.media-amazon.com/images/I/614-yYoVkUL._AC_UY218_.jpg"
                    rating={4} />
               
                </div>
                <div className="home__row">
                    < img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Home
