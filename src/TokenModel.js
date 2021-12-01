import React from 'react';
import tokenimg1 from "./images/tokenimg1.png";
import tokenimg2 from "./images/tokenimg2.svg";
import tokenimg3 from "./images/tokenimg3.png";
import tokenimg4 from "./images/tokenimg4.png";
import tokenimg5 from "./images/tokenimg5.png";
import tokenimg6 from "./images/tokenimg6.png";

import scrollimg1 from "./images/scrollimg1.png";
import scrollimg2 from "./images/scrollimg2.svg";
import scrollimg3 from "./images/scrollimg3.svg";
import scrollimg4 from "./images/scrollimg4.svg";
import scrollimg5 from "./images/scrollimg5.png";
import scrollimg6 from "./images/scrollimg6.svg";
import scrollimg7 from "./images/scrollimg7.png";
import scrollimg8 from "./images/scrollimg8.svg";
import scrollimg9 from "./images/scrollimg9.svg";
import './TokenModel.css';

function TokenModel() {
    return (
        <div>
<div>
        {/********* */}
        <div className="px-4 common-boxes-container">
        <div className="flex justify-between items-center  mt-4 mb-2">
            <h3 className="text-xl ">Select a token</h3>
            <h1 className="text-lg">X</h1>
        </div>
        <input type="text" id="token-model-input-large" name="fname" placeholder="Search name or paste address"/>
        <h3 className="text-xl pt-3">Common bases ?</h3>
        <div className="common-box-images">
            <div className="logo-images-container-large  ">
                <div>
                <img className="logo-images w-7 " src={tokenimg1} />
                </div>
                <h3 className="mt-2 ml-2 text-lg">ETH</h3>
            </div>

            <div className="logo-images-container-large  ">
                <div>
                <img className="logo-images w-7 " src={tokenimg2} />
                </div>
                <h3 className="mt-2 ml-2 text-lg">DAI</h3>
            </div>
            <div className="logo-images-container-large  ">
                <div>
                <img className="logo-images w-7 " src={tokenimg3} />
                </div>
                <h3 className="mt-2 ml-2 text-lg">USDC</h3>
            </div>

            <div className="logo-images-container-large  ">
                <div>
                <img className="logo-images w-7 " src={tokenimg4} />
                </div>
                <h3 className="mt-2 ml-2 text-lg">USDT</h3>
            </div>
        </div>

        <div className="common-box-images">
            <div className="logo-images-container-large  logo-images-container-large-extra">
                <div>
                <img className="logo-images w-6 " src={tokenimg5} />
                </div>
                <h3 className="mt-2 ml-2 text-lg">WBTC</h3>
            </div>

            <div className="logo-images-container-large logo-images-container-large-extra ">
                <div>
                <img className="logo-images w-7 " src={tokenimg6} />
                </div>
                <h3 className="mt-2 ml-2 text-lg">WETH</h3>
            </div>
        </div>
            
        </div>
        
        
        <div className="scroll-bg">
           <div className="scroll-div">
               <div className="scroll-object">
                   <div className="flex items-center">
                       <div >
                            <img className="Token-images w-8 pb-3" src={scrollimg1} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg  font-semibold mb-0">ETH</h3>
                            <p className="text-sm text-gray-500 ">Ether</p>
                        </div>
                   </div>

                   <div className="flex items-center">
                       <div>
                            <img className="w-8 pb-3" src={scrollimg2} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg  font-semibold mb-0">1INCH</h3>
                            <p className="text-sm text-gray-500 ">1Inch</p>
                        </div>
                   </div>

                   <div className="flex items-center">
                       <div>
                            <img className="w-8 pb-3" src={scrollimg3} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg  font-semibold mb-0">AAVE</h3>
                            <p className="text-sm text-gray-500 ">AAVE Token</p>
                        </div>
                   </div>

                   <div className="flex items-center">
                       <div>
                            <img className="w-8 pb-3" src={scrollimg4} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg  font-semibold mb-0">AMP</h3>
                            <p className="text-sm text-gray-500 ">AMP Token</p>
                        </div>
                   </div>

                   <div className="flex items-center">
                       <div>
                            <img className="w-8 pb-3" src={scrollimg5} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg  font-semibold mb-0">ANT</h3>
                            <p className="text-sm text-gray-500 ">Arogan Network Token</p>
                        </div>
                   </div>

                   <div className="flex items-center">
                       <div>
                            <img className="w-8 pb-3" src={scrollimg6} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg  font-semibold mb-0">BAL</h3>
                            <p className="text-sm text-gray-500 ">Balancer</p>
                        </div>
                   </div>

                   <div className="flex items-center">
                       <div>
                            <img className="w-8 pb-3" src={scrollimg7} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg  font-semibold mb-0">BAND</h3>
                            <p className="text-sm text-gray-500 ">Band Protocol</p>
                        </div>
                   </div>

                   <div className="flex items-center">
                       <div>
                            <img className="w-8 pb-3" src={scrollimg8} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg  font-semibold mb-0">BAT</h3>
                            <p className="text-sm text-gray-500 ">BasicAttentionToken</p>
                        </div>
                   </div>

                   <div className="flex items-center">
                       <div>
                            <img className="w-8 pb-3" src={scrollimg9} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg  font-semibold mb-0">BNT</h3>
                            <p className="text-sm text-gray-500 ">Bancor</p>
                        </div>
                   </div>
                   



                </div>
           </div>
        </div>
        <p className="text-xl font-semibold bg-gray-200  py-4 text-pink-600 flex items-center justify-center"><i class="far fa-edit mr-1 bg-gray-200"></i> Manage Token Lists</p>
        
        </div>
        {/********* */}





        <div className="flex justify-between items-center px-2 mt-4 mb-2">
            <h3 className="text-xl ">Select a token</h3>
            <h1>X</h1>
        </div>
        <input type="text" id="token-model-input" name="fname" placeholder="Search name or paste address"/>
        <div className="scroll-bg">
           <div className="scroll-div">
               <div className="scroll-object">
                   <div className="flex items-center">
                       <div >
                            <img className="Token-images w-8 pb-3" src={scrollimg1} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg  font-semibold mb-0">ETH</h3>
                            <p className="text-sm text-gray-500 ">Ether</p>
                        </div>
                   </div>

                   <div className="flex items-center">
                       <div>
                            <img className="w-8 pb-3" src={scrollimg2} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg  font-semibold mb-0">1INCH</h3>
                            <p className="text-sm text-gray-500 ">1Inch</p>
                        </div>
                   </div>

                   <div className="flex items-center">
                       <div>
                            <img className="w-8 pb-3" src={scrollimg3} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg  font-semibold mb-0">AAVE</h3>
                            <p className="text-sm text-gray-500 ">AAVE Token</p>
                        </div>
                   </div>

                   <div className="flex items-center">
                       <div>
                            <img className="w-8 pb-3" src={scrollimg4} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg  font-semibold mb-0">AMP</h3>
                            <p className="text-sm text-gray-500 ">AMP Token</p>
                        </div>
                   </div>



                </div>
           </div>
        </div>
        </div>
    )
}

export default TokenModel
