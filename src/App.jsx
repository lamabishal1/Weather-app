import React ,{ useState, useEffect } from 'react'
import axios from 'axios';
import Header from './components/Header.jsx'; 
import NewsList from './components/NewsList.jsx'
import Loader from "./components/Loader.jsx"
import './App.css'

function App() {
  const [category, setCategory] = useState('general');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchNews = async () => {
    setLoading(true);
    try{

      const response = await axios.get(`https://newsapi.org/v2/top-headlines`,{
        params:{
          category: category,
          country:'us',
          apikey:import.meta.env.VITE_API_KEY,          
        },        
      });
      setArticles(response.data.articles);
    }catch(error){
      console.log('Error fetching news:', error);
    }
    setLoading(false);
  };

  const handleCategoryChange = (newCategory) => {
    if (newCategory === category){
      setCategory('');
      setCategory(newCategory);
    }else{
      setCategory(newCategory);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <>
    <div>
        <Header setCategory={handleCategoryChange}/>
        {loading ? (
         <Loader />
        ) : articles.length === 0 ? (
            <p>No news available for this category.</p>
          ) : (
         <NewsList articles={articles} />)}        
          </div>
    </>
  );
}
export default App
