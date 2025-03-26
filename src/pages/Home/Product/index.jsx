import React from 'react'
import CardProduct from './CardProduct';
import Button from '../../../components/Button';

const LIST_PRODUCT = [
    {
        name: 'FROZEN FISH SEA CAUGHT',
        assets: '/product/fish-sea.png'
    },
    {
        name: 'FROZEN CHEPALOPODS',
        assets: '/product/squid.png'
    },
    {
        name: 'FROZEN FARM SHRIMP',
        assets: '/product/shrimp.png'
    },
    {
        name: 'CRAB MEAT',
        assets: '/product/crab.png'
    },
    {
        name: 'YELLOWFIN TUNA',
        assets: '/product/tuna.png'
    },
    {
        name: 'FROZEN FISH FARM RAISED',
        assets: '/product/catfish.png'
    },
    {
        name: 'DRY FISH SEA CAUGHT',
        assets: '/product/dry-fish.png'
    }
];

const Products = () => {
  return (
    <div className='mt-20 lg:mx-20 md:mx-15 sm:mx-10 mx-5'>
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
