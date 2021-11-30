import React from 'react';
import Switch from './Switch';
import './sett.css'

function Sett() {
    return (
        <div>
            <div>
                <h2 className="text-gray-600 font-bold text-xl ">Transcetion Settings</h2>
                <h2 className="text-gray-600 text-lg ">Slippage Tolerance ?</h2>
                <div className="flex justify-between">
                    <h4 className="slippage-button ">Auto</h4>
                    <input type="text" id="fname-one" name="fname" placeholder="0.10%" />
                </div>
                <h2 className="text-gray-600 text-xl">Transection Deadline</h2>
                <div className="flex justify-between">
                    <input type="text" id="fname-one" name="fname" placeholder="30"/>
                    <h4 className="text-xl">minutes</h4>
                </div>
                <h2 className="text-gray-600 font-bold text-2xl">Interface Settings</h2>
                <div className="flex justify-between">
                    <h4 className="text-gray-600 text-xl">Auto Router ?</h4>
                    <Switch />
                </div>
                <div className="flex justify-between">
                    <h4 className="text-gray-600 text-xl">Expert Model ?</h4>
                    <Switch />
                </div>
            </div>
        </div>
    )
}

export default Sett
