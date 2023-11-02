
import { useEffect, useState } from 'react';
import Filter from './Filter'
import Products from './Products';
import Pagination from './Pagination';

const Home = () => {
    const [sortFilter,setSortFilter]=useState("New Arrive");
    const [category,setCategory]=useState("");
    const [data,setData]=useState([]);
    const [extraData,setExtraData]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage,setCurrentPage]=useState(1);
    const [productPerPage,setProductPerPage]=useState(12);
    useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setExtraData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
    useEffect(()=>{
      let copiedArr = [...extraData];
      if(category){
        setData(copiedArr.filter((n) =>(n.category.name.includes(category))));
      }
    },[category])
    useEffect(()=>{
      let copiedArr = [...data];
      
      switch(sortFilter) {
        case "Ascending (A To Z)":
            setData(copiedArr.sort((a, b) => a.title.localeCompare(b.title)))
            break
        case "Descending (Z To A)":
            setData(copiedArr.sort((a, b) => b.title.localeCompare(a.title)))
            break
        case "High To Low":
            setData(copiedArr.sort((a, b) => b.price - a.price))
            break
        case "Low To High":
             setData(copiedArr.sort((a, b) => a.price - b.price))
            break
    }
    },[sortFilter])
    const indexOfLastProduct=currentPage*productPerPage;
    const indexOfFirstProduct=indexOfLastProduct-productPerPage;
    const currentPosts=data.slice(indexOfFirstProduct,indexOfLastProduct);
    const paginate=(pageNumber)=>setCurrentPage(pageNumber)
  return (
    <div>
        <Filter setSortFilter={setSortFilter} setCategory={setCategory}/>
          <Products data={currentPosts} loading={loading} error={error}/>
        <Pagination productPerPage={productPerPage} totalProduct={data.length} paginate={paginate}/>
    </div>
  )
}

export default Home