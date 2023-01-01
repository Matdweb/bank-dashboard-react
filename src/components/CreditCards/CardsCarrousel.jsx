import React from 'react'
import Carousel from "react-elastic-carousel";
import styles from "./CardsCarrousel.module.css";
import CreditCard from './CreditCardComponent/CreditCard';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

function CardsCarrousel() {
  return (
    <>
      <div className={styles.father}>
        <div className={styles.header}>
          <h2 style={{fontSize: "30px", fontWeight: "bolder", margin: "0 30px"}}>
            Your Credit Cards
          </h2>
        </div>
        <Carousel breakPoints={breakPoints} className={styles.carrousel}>
          <div className={styles.item}>
            <CreditCard />
          </div>
          <div className={styles.item}>
            <CreditCard />
          </div>
          <div className={styles.item}>
            <CreditCard />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default CardsCarrousel