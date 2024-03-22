import styles from './../styles/main.module.scss';

export default function ParkingPage() {
    return (
        <div className={styles.content}>
            <h2>Parking and transportation</h2>
            <p>
                We`re excited to once again be hosting this year`s Walk for
                Animals at the Minnesota State Fairgrounds. Thank you in advance
                for your traffic and parking cooperation on Walk day! As you
                make your way to the Fairgrounds, please be alert and pay close
                attention to event signage.
            </p>
            <p>
                <a href="https://goo.gl/maps/ULwaiofu68xdvavu8">
                    Free parking will be off of Como Ave near Gate #7
                </a>
                , located at:
            </p>
            <p>
                1660 Como Ave
                <br /> St Paul, MN 55108
            </p>
            <img
                className={styles.previewImg}
                src="./../../public/images/map.png"
                alt="Walk for Animals 2023 parking map"
            />
            <h3>Public transportation</h3>
            <p>
                Metro Transit Bus line 3 will drop you off near Gate #9 and is
                ADA accessible. Depending on which direction you are traveling
                from, it`s either stop 929 or stop 870.
            </p>
            <h3>Driving directions</h3>
            <p>Find directions below from all areas of the metro.</p>
            <strong>From the North:</strong>
            <p>
                Take I-94 E towards Minneapolis. Take exit 236 for MN-280.
                Continue onto MN-280 N and take the Energy Park Dr exit toward
                Kasota Ave. Turn right onto Energy Park Drive and then turn left
                onto Raymond Ave. Turn right onto Como Ave. The parking lot will
                be on your right.
            </p>
            <strong>From the South:</strong>
            <p>
                Take 1-35E N toward Saint Paul. Take exit 104B for Ayd Mill Rd.
                Continue onto Ayd Mill Rd and turn left onto W Ashland Ave.
                Then, turn right onto Hamline Ave. Turn left onto St. Anthony
                Ave and then turn right onto Snelling Ave. Take the Como Ave
                exit, turn left onto Como Ave. The parking lot will be on your
                left.
            </p>
            <strong>From the East:</strong>
            <p>
                Take I-94 W to St. Anthony Ave in Saint Paul. Take exit 238 from
                I-94W toward MN-51/Snelling Ave. Turn right onto Snelling Ave
                and take the Como Ave exit. Turn left onto Como Ave. The parking
                lot will be on your left.
            </p>
            <strong>From the West:</strong>
            <p>
                Take I-394E/US-12 E toward Minneapolis. Take the exit to merge
                onto I-94 E. Take the exit for MN 280. Continue onto MN-280-N
                and take the Energy Park Dr exit toward Kasota Ave. Turn right
                onto Energy Park Drive and then turn left onto Raymond Ave. Turn
                right onto Como Ave. The parking lot will be on your right.
            </p>
        </div>
    );
}
