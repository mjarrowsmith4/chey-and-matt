import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chey &amp; Matt&apos;s Wedding</title>
        <meta name="description" content="Cheyenne &amp; Matthew's Wedding" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <section className="banner">
          <div className="banner-text">
            <h1>Cheyenne &amp; Matthew</h1>
            <h2>11/03/22</h2>
            <a href="https://cheyandmattswedding.rsvpify.com/" rel="noreferrer" target="_blank">
              <button>
                Click to RSVP
              </button>
            </a>
          </div>
        </section>

        <div className="intro">
          <h3>Please join us for our wedding day...</h3>
          <p className="address">Curradine Barns<br />
          Church Ln,<br />
          Shrawley,<br />
          Worcester WR6 6TS</p>
        </div>

        <section className="block green-bg">
          <div className="block-content">
            <div className="block-column">
              <h4>Schedule</h4>
              <h5>On the day...</h5>
            </div>

            <div className="block-column_large">
              <ul>
                <li>
                  <span className="time">6:30pm</span>
                  <span className="event">Evening Guests</span>
                </li>
                <li>
                  <span className="time">8pm</span>
                  <span className="event">First dance</span>
                </li>
                <li>
                  <span className="time">8:30pm</span>
                  <span className="event">Evening food</span>
                </li>
                <li>
                  <span className="time">12am</span>
                  <span className="event">Closing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="block extend_pad grey-bg">
          <h4>Accomodation</h4>
          <h5>Places to stay...</h5>
        </div>

        <section className="block-grid">
          <div className="grid-item">
            <h5>The Lenchford Inn</h5>
            <a href="https://www.booking.com/hotel/gb/the-lenchford-inn.en-gb.html?aid=356980;label=gog235jc-1DCAMoUEIIc2hyYXdsZXlICVgDaFCIAQGYAQm4AQfIAQzYAQPoAQH4AQKIAgGoAgO4Au3Cjo0GwAIB0gIkZjFjZGI5NzUtMGI2NC00Mjg3LWI0OWQtZDYyMmMzYTA4Y2E12AIE4AIB;sid=00adbf206829c4850be08981f920639a;all_sr_blocks=3758405_309251009_2_34_0;checkin=2022-03-11;checkout=2022-03-12;dist=0;group_adults=2;group_children=0;hapos=0;highlighted_blocks=3758405_309251009_2_34_0;hpos=0;matching_block_id=3758405_309251009_2_34_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=distance_from_search;sr_pri_blocks=3758405_309251009_2_34_0__8700;srepoch=1638113742;srpvid=3c926da6761e0051;type=total;ucfs=1&#hotelTmpl" rel="noreferrer" target="_blank">
              <button>
                Book here
              </button>
            </a>
          </div>

          <div className="grid-item">
            <h5>The Leaking Well</h5>
            <a href="https://www.booking.com/hotel/gb/the-leaking-well.en-gb.html?label=gog235jc-1DCAMoUEIIc2hyYXdsZXlICVgDaFCIAQGYAQm4AQfIAQzYAQPoAQH4AQKIAgGoAgO4Au3Cjo0GwAIB0gIkZjFjZGI5NzUtMGI2NC00Mjg3LWI0OWQtZDYyMmMzYTA4Y2E12AIE4AIB&sid=00adbf206829c4850be08981f920639a&aid=356980&ucfs=1&arphpl=1&checkin=2022-03-11&checkout=2022-03-12&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=distance_from_search&srpvid=3c926da6761e0051&srepoch=1638113742&all_sr_blocks=36068902_95537756_0_0_0&highlighted_blocks=36068902_95537756_0_0_0&matching_block_id=36068902_95537756_0_0_0&sr_pri_blocks=36068902_95537756_0_0_0__8295&from=searchresults#hotelTmpl" rel="noreferrer" target="_blank">
              <button>
                Book here
              </button>
            </a>
          </div>

          <div className="grid-item">
            <h5>The Manor Arms Inn</h5>
            <a href="https://www.booking.com/hotel/gb/the-manor-arms-inn-abberley.en-gb.html?label=gog235jc-1DCAMoUEIIc2hyYXdsZXlICVgDaFCIAQGYAQm4AQfIAQzYAQPoAQH4AQKIAgGoAgO4Au3Cjo0GwAIB0gIkZjFjZGI5NzUtMGI2NC00Mjg3LWI0OWQtZDYyMmMzYTA4Y2E12AIE4AIB&sid=00adbf206829c4850be08981f920639a&aid=356980&ucfs=1&arphpl=1&checkin=2022-03-11&checkout=2022-03-12&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=2&hapos=2&sr_order=distance_from_search&srpvid=3c926da6761e0051&srepoch=1638113742&all_sr_blocks=127575704_201043354_2_1_0&highlighted_blocks=127575704_201043354_2_1_0&matching_block_id=127575704_201043354_2_1_0&sr_pri_blocks=127575704_201043354_2_1_0__10000&from=searchresults#hotelTmpl" rel="noreferrer" target="_blank">
              <button>
                Book here
              </button>
            </a>
          </div>

          <div className="grid-item">
            <h5>Hadley Bowling Green Inn</h5>
            <a href="https://www.booking.com/hotel/gb/hadley-bowling-green.en-gb.html?aid=356980;label=gog235jc-1DCAMoUEIIc2hyYXdsZXlICVgDaFCIAQGYAQm4AQfIAQzYAQPoAQH4AQKIAgGoAgO4Au3Cjo0GwAIB0gIkZjFjZGI5NzUtMGI2NC00Mjg3LWI0OWQtZDYyMmMzYTA4Y2E12AIE4AIB;sid=00adbf206829c4850be08981f920639a;all_sr_blocks=34009402_332294109_0_1_0;checkin=2022-03-11;checkout=2022-03-12;dist=0;group_adults=2;group_children=0;hapos=3;highlighted_blocks=34009402_332294109_0_1_0;hpos=3;matching_block_id=34009402_332294109_0_1_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=distance_from_search;sr_pri_blocks=34009402_332294109_0_1_0__12600;srepoch=1638113742;srpvid=3c926da6761e0051;type=total;ucfs=1&#hotelTmpl" rel="noreferrer" target="_blank">
              <button>
                Book here
              </button>
            </a>
          </div>

          <div className="grid-item">
            <h5>The Angel Inn Stourport</h5>
            <a href="https://www.booking.com/hotel/gb/the-angel-inn-stourport.en-gb.html?aid=356980;label=gog235jc-1DCAMoUEIIc2hyYXdsZXlICVgDaFCIAQGYAQm4AQfIAQzYAQPoAQH4AQKIAgGoAgO4Au3Cjo0GwAIB0gIkZjFjZGI5NzUtMGI2NC00Mjg3LWI0OWQtZDYyMmMzYTA4Y2E12AIE4AIB;sid=00adbf206829c4850be08981f920639a;all_sr_blocks=259306002_203271944_0_0_0;checkin=2022-03-11;checkout=2022-03-12;dist=0;group_adults=2;group_children=0;hapos=4;highlighted_blocks=259306002_203271944_0_0_0;hpos=4;matching_block_id=259306002_203271944_0_0_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=distance_from_search;sr_pri_blocks=259306002_203271944_0_0_0__6500;srepoch=1638113742;srpvid=3c926da6761e0051;type=total;ucfs=1&#hotelTmpl" rel="noreferrer" target="_blank">
              <button>
                Book here
              </button>
            </a>
          </div>

          <div className="grid-item">
            <h5>The Wharf Stourport</h5>
            <a href="https://www.booking.com/hotel/gb/the-wharf-stourport.en-gb.html?aid=356980;label=gog235jc-1DCAMoUEIIc2hyYXdsZXlICVgDaFCIAQGYAQm4AQfIAQzYAQPoAQH4AQKIAgGoAgO4Au3Cjo0GwAIB0gIkZjFjZGI5NzUtMGI2NC00Mjg3LWI0OWQtZDYyMmMzYTA4Y2E12AIE4AIB;sid=00adbf206829c4850be08981f920639a;all_sr_blocks=245473102_203977221_2_0_0;checkin=2022-03-11;checkout=2022-03-12;dist=0;group_adults=2;group_children=0;hapos=5;highlighted_blocks=245473102_203977221_2_0_0;hpos=5;matching_block_id=245473102_203977221_2_0_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=distance_from_search;sr_pri_blocks=245473102_203977221_2_0_0__7000;srepoch=1638113742;srpvid=3c926da6761e0051;type=total;ucfs=1&#hotelTmpl" rel="noreferrer" target="_blank">
              <button>
                Book here
              </button>
            </a>
          </div>
        </section>
      </main>

      <footer className="block green-bg">
        <p>Present List,<br /> monetary gift or John Lewis voucher</p>

        <a href="https://prezola.com/wishlists/10242892/" rel="noreferrer" target="_blank">
          <button>
            Wedding List
          </button>
        </a>

        <a href="https://paypal.me/cheymattwedding?country.x=GB&locale.x=en_GB" rel="noreferrer" target="_blank">
          <button>
            Monetary Gift
          </button>
        </a>

        <a href="https://www.johnlewis.com/customer-services/prices-and-payment/gift-cards" rel="noreferrer" target="_blank">
          <button>
            John Lewis
          </button>
        </a>
      </footer>
    </div>
  )
}
