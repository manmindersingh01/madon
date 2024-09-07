import React, { useEffect, useState } from 'react'
import Animation from '../components/Animation'
import service from '../appwrite/config'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/ShopModel';

const Products = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState({ isOpen: false, product: {} });
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.status)
  const navigate = useNavigate();
  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await service.getPosts();
        setLoading(false)
        console.log("differnt", posts.documents[0].$id);  // This logs the full response object

        setData(posts.documents);  // Setting data to the documents array
        console.log("error",);

      } catch (error) {
        console.log("Error in getPosts in Appwrite", error);
      }
    };
    getPosts();
  }, []);
  const handleCardClick = (props) => {

    console.log("id", props);
    console.log(props.$id);

    if (isAuthenticated) {
      setIsModalOpen({ isOpen: true, product: props });
    } else {
      navigate('/login')
    }
  }


  const handleCloseModal = (props) => {
    setIsModalOpen(false);
  };
  return loading ? (<div className='bg-[#F9EBCC] h-screen w-full flex justify-center items-center'>
    <div class="border  shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-slate-100 h-10 w-10"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-100 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-100 rounded col-span-2"></div>
              <div class="h-2 bg-slate-100 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-100 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>) : (

    <div className='w-full max-w-9xl h-auto  scroll-smooth '>
      {
        data.map((item, idx) => (
          <div key={idx} className=' w-full h-auto bg-[#F9EBCC]' id='product1'>
            <div className='p-5'>
              <div className='py-16 flex flex-col md:flex-row items-center md:justify-around'>
                <div className='flex flex-col items-center justify-center md:h-[500px] md:w-[600px] '>
                  <h1 className='text-7xl md:text-9xl font-extrabold text-[#313832]   p-10 pb-0' >
                    <Animation>
                      Be Curl, Calm, and Collected
                    </Animation>
                  </h1>
                  <p className='p-10  font-moli tracking-wide text-[#313832bf] font-bold'>
                    <Animation>
                      "Looped is a salon specializing in hair that spirals, swirls, waves, whirls, loops, and curls.
                    </Animation>
                  </p>
                </div>
                <div className=' flex flex-col justify-center items-center w-full'>
                  <Animation>
                    <div className=' bg-[#90A8AA] h-auto w-[22rem] mt-10 rounded-[30px] overflow-hidden object-cover '>
                      <img className='' src={item.ImageUrl} alt="" />
                    </div>
                  </Animation>
                  <div className='px-5'>
                    <button onClick={() => handleCardClick(item)} className='bg-[#A2B6A2]  text-[#313832] w-[22rem] mt-5 h-16 rounded-[30px] text-xl tracking-wider' >Get it </button>
                  </div>
                </div>


              </div>
            </div>

            <div className='  p-10 flex flex-col justify-center items-center md:flex-row md:justify-around gap-4'>
              <div className='  h-[38rem] w-[26rem] mt-10 rounded-[30px] hidden md:block relative '>
                <Animation>
                  <div className=' h-96 w-72 rounded-[30px] absolute top-0 overflow-hidden'>
                  // detail shots of product
                    <img src={'j3.png'} alt="" />
                  </div>
                </Animation>
                <Animation>
                  <div className='h-80 w-72 rounded-[30px] absolute left-24 top-64 overflow-hidden '>
                // detail shots of product
                    <img src={'j1.png'} alt="" />
                  </div>
                </Animation>

              </div>
              <div className=' md:h-[500px] md:w-[600px] w-[24rem] p-5 '>
                <Animation>


                  <h1 className='font-moli text-6xl font-extrabold text-[#313832]'>About</h1>
                  <hr className='border-t-2 border-black' />
                  <div className='font-bold  text-[#313832]'>
                    <h2>
                      Material
                    </h2>
                    <p className='text-[#31383296]'>

                      Looped uses natural hair, spirals, swirls, waves, whirls, loops, and curls to create an unusual, unconventional, and unique look.
                    </p>

                  </div>
                  <hr className='border-t-2 border-black' />
                  <div className='font-bold  text-[#313832]'>
                    <h2>
                      Details
                    </h2>
                    <p className='text-[#31383296]'>

                      Looped uses natural hair, spirals, swirls, waves, whirls, loops, and curls to create an unusual, unconventional, and unique look.
                    </p>
                  </div>
                </Animation>
              </div>
              <div className='  h-[38rem] w-[26rem] mt-10 rounded-[30px] md:hidden relative'>
                <div className=' h-96 w-72 rounded-[30px] absolute top-0 overflow-hidden'>
                  <img src={'j3.png'} alt="" />
                </div>
                <div className=' h-80 w-72 rounded-[30px] absolute left-24 overflow-hidden top-64 '>
                  <img src={'j3.png'} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))
      }

      <Modal
        isOpen={isModalOpen.isOpen}
        onClose={handleCloseModal}
        product={isModalOpen.product}
      // onSubmit={handleAddToCart}
      // sizes={sizes}
      />
    </div>
  )
}

export default Products