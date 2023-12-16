import React from 'react';
import { getCategories } from '@/app/api/category';
import ProductForm from '@/components/ui/productform/productform';
import { Categories, GetCategories } from '@/types/category';



export default async function NewProduct() {
  // const response = await getCategories();
  // const { categories } = response.data;
  const categories: GetCategories[]  = []

  return (
    <ProductForm categories={categories}/>
  )
}
