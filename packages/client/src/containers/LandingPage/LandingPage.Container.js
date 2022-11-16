import React from 'react';
import './LandingPage.Style.css';
import { ProductsList } from './ProductsList';
import { products } from './Products';
import Navbar from '../../components/Button/Navbar';

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Navbar />
      <div className="landing-page-header">
        <span>LANDING PAGE</span>
      </div>
      <ProductsList products={products} />
    </div>
  );
};
