import React from 'react';
import { getCategories } from '@/app/api/category';
import ProductForm from '@/components/ui/productform/productform';



export default async function NewProduct() {
  const response = await getCategories();
  const { categories } = response.data;

  return (
    <ProductForm categories={categories}/>
  )
}
