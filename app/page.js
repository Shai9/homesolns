"use client"
import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import React, { useState } from "react";
import { useEffect } from "react";
import GlobalApi from "./_services/GlobalApi";


export default function Home() {

  const [categoryList, setCategorylist] = useState([])
  useEffect(() => {
    getCategoryList();
  }, [])
  
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategorylist(resp.categories);
    })
  }
  return (
    <div>
      <Hero />

      <CategoryList categoryList={categoryList}/>
    </div>
  );
}
