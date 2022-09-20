import Top3ranking from '../Components/Top3ranking';
import Crawling from '../Components/Crawling';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagenation from '../Components/Pagenation';
import comments from '../data/Comments'
import deals from '../data/Deals'

let serverURL = 'http://ec2-52-78-195-243.ap-northeast-2.compute.amazonaws.com';

function Home() {
  let [hotdeals, setHotDeals] = useState(deals);

  let [pagenum, setPageNum] = useState('1');
  // let [comments, setComments] = useState(comments)

  console.log(comments, deals)


  let nextPageBtn = (num) => {
    setPageNum(num);
  };

  useEffect(() => {
    axios
      .get(`${serverURL}/deal?&page=${pagenum}&pageSige=10`)
      .then((rp) => {
        setHotDeals(rp.data);
      })
      .catch((err) => setPageNum(0));
  }, [pagenum]);

  return (
    <div className='items-center p-4'>
      <Top3ranking hotdeals={hotdeals} />
      {pagenum === 0 ? (
        <div className='bg-white p-4 mb-4'>페이지를 찾을 수 없습니다</div>
      ) : (
        <Crawling hotdeals={hotdeals} />
      )}
      <Pagenation nextPage={nextPageBtn} />
    </div>
  );
}
export default Home;