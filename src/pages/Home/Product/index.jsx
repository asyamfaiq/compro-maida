import React from 'react'
import CardProduct from './CardProduct';
import Button from '../../../components/Button';

const LIST_PRODUCT = [
    {
        name: 'FROZEN FISH SEA CAUGHT',
        assets: `${import.meta.env.BASE_URL}product/fish-sea.png`
    },
    {
        name: 'FROZEN CHEPALOPODS',
        assets: `${import.meta.env.BASE_URL}product/squid.png`
    },
    {
        name: 'FROZEN FARM SHRIMP',
        assets: `${import.meta.env.BASE_URL}product/shrimp.png`
    },
    {
        name: 'CRAB MEAT',
        assets: `${import.meta.env.BASE_URL}product/crab.png`
    },
    {
        name: 'YELLOWFIN TUNA',
        assets: `${import.meta.env.BASE_URL}product/tuna.png`
    },
    {
        name: 'FROZEN FISH FARM RAISED',
        assets: `${import.meta.env.BASE_URL}product/catfish.png`
    },
    {
        name: 'DRY FISH SEA CAUGHT',
        assets: `${import.meta.env.BASE_URL}product/dry-fish.png`
    }
];

const Products = () => {
  return (
    <div id='product' className='mt-20 lg:mx-20 md:mx-15 sm:mx-10 mx-5'>
      <h1 className='font-bold text-deep-blue text-4xl text-center mb-5'>Products</h1>
      <div className='grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1'>
        {
            LIST_PRODUCT.map((product) => <CardProduct key={product.name} product={product}/> )
        }
        <div className='flex flex-col items-center justify-center gap-3'>
            <Button label={'Contact Us'} className='cursor-pointer bg-secondary text-white text-xl font-medium hover:bg-secondary/80' /> 
            for More Information
        </div>
      </div>
    </div>
  )
}

export default Products
