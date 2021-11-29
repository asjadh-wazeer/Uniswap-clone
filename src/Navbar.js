import React from 'react'


    
        

        const NavSm = () => {
            return (
            <>
            <div className="flex items-center justify-between  ">
            
            <div className="logo bg-green-700 w-9xl p-9xl ml-4">logo</div>
            <div className="flex items-center justify-around ">
                <div className="rounded-lg bg-blue-100 px-2 py-1 mr-3">
                    <i class="fab fa-ethereum ethereum__icon bg-blue-600 text-sm text-white  rounded-full py-1 px-2"></i>
                </div>
                <h3 className="nav__text mr-3 text-base text-pink-700 bg-pink-100  font-bold rounded-lg p-2">Connect Wallet</h3>
                <div className="nav__menu mr-2 bg-white rounded-lg px-2 py-1 "><i class="fas fa-ellipsis-h"></i></div>
            </div>
            
        </div>
            </>
            )
            };


            const NavMd = () => {
                return (
                 <>
                    <div className="w-full flex items-center justify-between  ">
            
            <div className="logo bg-green-700 w-9xl p-9xl ml-4">logo</div>
            <div className="flex items-center justify-around ">
                <div className="rounded-lg flex items-center bg-blue-100 px-3 py-2 mr-6">
                    <i class="fab fa-ethereum ethereum__icon bg-blue-600 text-sm text-white  rounded-full py-1 px-2"></i>
                    <h3 className="font-bold ml-3 bg-blue-100">Ethhereum</h3>
                </div>
                <h3 className="nav__text mr-6 text-pink-700 bg-pink-100 text-xl font-bold rounded-lg p-2">Connect Wallet</h3>
                <i class="fas fa-ellipsis-h nav__menu mr-6 bg-white rounded-lg px-3 py-3 m-4"></i>
            </div>
            
        </div>
                 </>
                )
                };
                const NavLg = () => {
                return (
                <>
                
                <div className="w-full flex items-center justify-between  ">
            
            <div className="logo bg-green-700 w-9xl p-9xl ml-4">logo</div>
            <ul className="nav-menu flex text-lg font-semibold bg-white rounded-lg text-gray-700 ">
                <li className="mx-2 my-1 px-3 py-1 items rounded-lg hover:bg-gray-200 hover:text-black">Swap</li>
                <li className="mx-2 my-1 px-3 py-1  rounded-lg hover:bg-gray-200 hover:text-black">Pool</li>
                <li className="mx-2 my-1 px-3 py-1  rounded-lg hover:bg-gray-200 hover:text-black">Vote</li>
                <li className="mx-2 my-1 px-3 py-1  rounded-lg hover:bg-gray-200 hover:text-black">Chart <i className="fas fa-external-link-alt"></i></li>
            </ul>
            <div className="flex items-center justify-around ">
                <div className="rounded-lg flex items-center bg-blue-100 px-3 py-2 mr-6">
                    <i className="fab fa-ethereum ethereum__icon bg-blue-300 text-sm text-gray-700  rounded-full  px-1"></i>
                    <h3 className="font-bold ml-3 bg-blue-100">Ethhereum</h3>
                </div>
                <h3 className="nav__text mr-1 text-pink-700 bg-pink-100  font-bold rounded-lg py-2 px-3">Connect Wallet</h3>
                <i className="fas fa-ellipsis-h nav__menu mr-6 bg-white rounded-lg px-3 py-3 m-4"></i>
            </div>
            
        </div>
              
                </>
                )
                };

            const Navbar = () => {
                return (
                <>
                <nav className=" px-4 py-2">
                   <div className="md:hidden">
                      {
                      /*Mobile Screen*/
                      <NavSm />
                      }
                   </div>
                   <div className="hidden lg:hidden md:flex">
                      {
                      /*Tablet Screen*/
                      <NavMd />
                      }
                   </div>
                   <div className="hidden lg:flex">
                      {
                      /*desktop Screen*/
                      <NavLg />
                      }
                   </div>
                </nav>
                </>
                )
                };
        
        
    

export default Navbar;
