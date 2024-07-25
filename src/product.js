import { Inout } from "./inout";
import {Cart} from './cart.js'
// import { Navigation } from "./Navigation.js";
export function Product(){
    return(
        <div>
            {/* <div><Navigation/></div> */}
            <div>
                <h1>Chetak 2901 Electric Scooter by Bajaj Auto - with charger - Ebony Black</h1>
            </div>
            <div style={{display:"flex"}}>
                <div>
                    <img src="../scooty.jpg" alt=""/>
                </div>
                <div>
                    <h3>Product Description</h3>
                    <h5>Worryproof Loooong Range</h5>
                    <p>Enjoy longer rides without the hassle of searching for a charging station, and explore more with an impressive range of 123 km</p>
                    <h5>Thudproof Solid Metal Body</h5>
                    <p>Handle thuds, bumps, and life's unexpected hits like a champ with a solid metal body, leaving on-road worries behind</p>
                    <h5>Hassleproof Coloured Display</h5>
                    <p>Effortlessly access essential ride data with crisp, vibrant details, ensuring you always stay informed</p>
                    <h5>Struggleproof Alloy Wheels</h5>
                    <p>Experience enhanced handling, improved braking, and smoother rides with lightweight alloy wheels, even in unexpected conditions</p>
                    <h3>₹95,998.00</h3>
                    <Cart/>
                </div>
            </div>
            <div>
                <h3>Product Specifications</h3>
                <ul>
                    <li>Colour: Ebony Black</li>
                    <li>Specifications: 123 kms range in single charge; 63 kmph top speed (Unlock 3 ride modes with TecPac: 2 Forward - Eco and Sports and 1 Reverse)</li>
                    <li>Hasslefree: Charge your Chetak with the offbaord charger using any normal 220V, 15A, 3 pin earthed socket.</li>
                    <li>Thudproof & Splashproof: Seamless steel unibody that is built to last with IP67 rating for water resistance</li>
                    <li>Stressproof: Future ready with Bluetooth; Call Accept/Reject; (Unlock Hill-hold Assist, Reverse Lights, Guide me home lights, Auto Flashing Stop lamp, self-cancelling blinkers, and Music Control with TecPac)</li>
                    <li>Other Features: Colour LCD Display with Digital speedometer, odometer, and tripmeter; Touch Sensitive Switches; Braking: Front & Rear Drum Brakes; Motor Type: PMSM; Storage:Underseat storage 21 L. *Subscription of TecPac has to be purchased additionally, directly from the dealer</li>
                </ul>
            </div>
            <div>
                <div>
                    <h3>Reviews</h3>
                </div>
                <div>
                    <Inout/>
                </div>
            </div>
        </div>
    );
}