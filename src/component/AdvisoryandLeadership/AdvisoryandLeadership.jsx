import React from 'react';
import './AdvisoryandLeadership.css';

export default function AdvisoryandLeadership() {
  return (
    <div className="meeting-container" id="advisory">
      <h1 className="main-heading">Advisory Board And Technology Leadership</h1>

      <div className="meeting-content">
        {/* Left Section - Advisory Board */}
        <div className="left-section">
          <div className="vertical-text-left">
            Advisory Board
          </div>
          <div className="agenda-item agenda-item-left">
            <div className="circle">SA</div>
            <div className="text-box">
              <p>Dr Shoaib A Khan (Chancellor SS CASE University)</p>
            </div>
          </div>
          <div className="agenda-item agenda-item-left">
            <div className="circle">AH</div>
            <div className="text-box">
              <p>Air Marshal (Rtd) Ahmad Hassan (Consultant Aerospace MRO)</p>
            </div>
          </div>
          <div className="agenda-item agenda-item-left">
            <div className="circle">NQ</div>
            <div className="text-box">
              <p>Commodore Dr Nadeem Qureshi (Dean Pakistan Marine Academy)</p>
            </div>
          </div>
          <div className="agenda-item agenda-item-left">
            <div className="circle">UA</div>
            <div className="text-box">
              <p>Dr Umer Alvi (CEO 128 Technologies, Pakistan)</p>
            </div>
          </div>
          <div className="agenda-item agenda-item-left">
            <div className="circle">FK</div>
            <div className="text-box">
              <p>Dr Farid Khan (CEO PharmaKure, UK)</p>
            </div>
          </div>
          <div className="agenda-item agenda-item-left">
            <div className="circle">IR</div>
            <div className="text-box">
              <p>Dr Imran Rauf (PhD Bio Informatics)</p>
            </div>
          </div>
          <div className="agenda-item agenda-item-left">
            <div className="circle">RB</div>
            <div className="text-box">
              <p>Raheel Bodla (Success Coach, Silicon Valley USA)</p>
            </div>
          </div>
          <div className="agenda-item agenda-item-left">
            <div className="circle">KK</div>
            <div className="text-box">
              <p>Mohammad Khaem Khan (M/s Keystone Consulting)</p>
            </div>
          </div>
        </div>

        {/* Right Section - Technology Leadership */}
        <div className="right-section">
          <div className="vertical-text-right">
            Technology Leadership
          </div>
          <div className="agenda-item">
            <div className="circle">TS</div>
            <div className="text-box">
              <p>Dr Tariq Saeed (AI & Big Data, NUST)</p>
            </div>
          </div>
          <div className="agenda-item">
            <div className="circle">SA</div>
            <div className="text-box">
              <p>Dr Sajjad Ahmad Madani (IoT & Networks, COMSATS)</p>
            </div>
          </div>
          <div className="agenda-item">
            <div className="circle">LA</div>
            <div className="text-box">
              <p>Dr Liaqat Ali Khan (Cyber & Crypto, AU)</p>
            </div>
          </div>
          <div className="agenda-item">
            <div className="circle">MA</div>
            <div className="text-box">
              <p>Dr Mukhtar Ahmad (Bio-Informatics, NSU)</p>
            </div>
          </div>
          <div className="agenda-item">
            <div className="circle">MA</div>
            <div className="text-box">
              <p>Dr Mansoor Ahsan (Robotics & Autonomous Systems, NASTP)</p>
            </div>
          </div>
          <div className="agenda-item">
            <div className="circle">AS</div>
            <div className="text-box">
              <p>Dr Ali Sarosh (Space & Propulsion, AU)</p>
            </div>
          </div>
          <div className="agenda-item">
            <div className="circle">AH</div>
            <div className="text-box">
              <p>Dr Amir Hassan (Communications & Networks, Habib University)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
