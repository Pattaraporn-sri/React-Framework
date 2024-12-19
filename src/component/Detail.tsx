import React from "react";
import { Col, Row } from "antd";
import temoniter from "./img/icons8-thermometer-96.png";
import air from "./img/icons8-air-96.png";
import north from "./img/icons8-compass-north-96.png";
import sunrisr from "./img/icons8-sunrise-64.png";
import sunset from "./img/icons8-sunset-64.png";
import marker from "./img/icons8-location-64.png";
import cloud from "./img/icons8-partly-cloudy-day-94.png";
import sun from "./img/icons8-sun-48 (3).png";
import suncloud from "./img/icons8-cloud-64.png";
import raincloud from "./img/icons8-rain-cloud-48.png";
import stomycloud from "./img/icons8-stormy-weather-48.png";
import Sunset from "./img/icons8-vaporwave-48.png";
import night from "./img/icons8-night-48.png";
import moonnight from "./img/icons8-fog-64.png";
import moon from "./img/icons8-crescent-moon-64.png";
import MenuPage from "./MenuPage";

function Detail() {
  return (
    <div className="lg:h-screen md:h-[2700px] lg:w-[1535px] md:w-[2000px] lg:bg-sky md:bg-sky lg:bg-cover md:bg-cover overflow-hidden">
      <div className="absolute lg:h-[400px] md:h-[550px] bg-slate-100 lg:w-[800px] md:w-[1200px] lg:rounded-xl md:rounded-3xl shadow-xl lg:ml-[350px] md:ml-[350px] lg:mt-10 md:mt-36">
        <img className="absolute lg:ml-[240px] md:ml-[320px] lg:mt-9 md:mt-12 lg:h-9 md:h-11" src={marker} />
        <p className="text-center font font-Mitr text-gray-600 lg:text-3xl md:text-5xl lg:pt-10 md:pt-12">
          อำเภอเมืองขอนแก่น
        </p>
        <div className="font font-Mitr lg:mt-5 md:mt-6 lg:ml-14 md:ml-20 text-gray-600">
          <p className="lg:text-2xl md:text-4xl">ธันวาคม 20 </p>
          <p className="lg:text-lg md:text-3xl">เสาร์</p>
        </div>
        <div className="flex h-32">
          <img className="ml-5 lg:h-20 md:h-28 mt-5" src={temoniter} />
          <p className="font font-Mitr lg:text-7xl md:text-8xl text-gray-700 mt-7">29°</p>
          <img className="lg:h-44 md:h-60 -mt-14 lg:ml-28 md:ml-40" src={cloud} />
          <div className="flex flex-col -mt-20 ml-10">
            <div className="flex flex-row">
              <img className="lg:h-8 md:h-14 lg:ml-14 md:ml-32 mt-8" src={air} />
              <p className="font font-Mitr text-gray-600 md:text-xl mt-10 ml-3">Wind:</p>
              <p className="font font-Mitr text-gray-600 md:text-xl mt-10 ml-2">9km/h</p>
            </div>

            <div className="flex flex-row">
              <img className="lg:h-8 md:h-14 lg:ml-14 md:ml-32 md:mt-2" src={north} />
              <p className="font font-Mitr text-gray-600 md:text-xl mt-4 ml-3">
                North-East
              </p>
            </div>

            <div className="flex flex-row">
              <img className="lg:h-8 md:h-14 lg:ml-14 md:ml-32 md:mt-2" src={sunrisr} />
              <p className="font font-Mitr text-gray-600 md:text-xl mt-5 ml-2 md:mt-5 text-base">
                Sunrise
              </p>
            </div>

            <div className="flex flex-row">
              <img className="lg:h-8 md:h-14 lg:ml-14 md:ml-32 md:mt-2" src={sunset} />
              <p className="font font-Mitr text-gray-600 md:text-xl mt-5 ml-2 text-base">
                Sunset
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:mt-2 md:mt-10">
          <p className="font font-Mitr text-gray-600 lg:text-xl md:text-2xl ml-14">
            สูงสุด: 31°
          </p>
          <p className="font font-Mitr text-gray-600 lg:text-xl md:text-2xl ml-3">
            ต่ำสุด: 15°
          </p>
        </div>
        <p className="font font-Mitr text-gray-600 text-center lg:text-lg md:text-2xl lg:ml-24 md:ml-18 lg:mt-5 md:mt-8 mb-5">
          แดดออก คาดว่าจะมีเมฆบางส่วนประมาณเวลา 18:00 น.
        </p>
      </div>
      <Row
        className="absolute bottom-0 md:w-[1500px] lg:ml-40 md:ml-96 lg:mb-24 md:-mb-4"
      >
        <Col
          className="lg:h-40 md:h-40  bg-[#0033FF] rounded-2xl shadow-lg shadow-slate-800"
          span={2}
        >
          <div className="font font-Mitr text-white text-center text-xl mt-7">
            ตอนนี้
          </div>
          <img className="h-10 ml-9 mt-1" src={sun} />
          <div className="font font-Mitr text-white text-center text-xl mt-2 -ml-3">
            32°
          </div>
        </Col>
        <Col
          className="lg:ml-5 md:ml-5 bg-[#eeeeee] rounded-2xl shadow-lg shadow-slate-400"
          span={2}
        >
          <div className="font font-Mitr text-center text-xl mt-7">15:00</div>
          <img className="h-12 ml-9 mt-1" src={suncloud} />
          <p className="font font-Mitr text-center text-xl mt-2">32°</p>
        </Col>
        <Col
          className="lg:ml-5 md:ml-5 h-40 bg-[#3366FF] rounded-2xl shadow-lg shadow-slate-500"
          span={2}
        >
          <div className="bg-white h-full bg-opacity-35 rounded-2xl">
            <div className="font font-Mitr text-white text-center text-xl pt-7">
              16:00
            </div>
            <img className="h-12 ml-9 mt-1" src={raincloud} />
            <p className="font font-Mitr  text-white text-center text-xl mt-1">
              31°
            </p>
          </div>
        </Col>
        <Col
          className="lg:ml-5 md:ml-5 bg-[#eeeeee] rounded-2xl shadow-lg shadow-slate-400"
          span={2}
        >
          <div className="font font-Mitr text-center text-xl mt-7">17:00</div>
          <img className="h-10 ml-9 mt-1" src={stomycloud} />
          <div className="font font-Mitr text-center text-xl mt-2">28°</div>
        </Col>
        <Col
          className=" lg:ml-5 md:ml-5 h-40 bg-[#3366FF] rounded-2xl shadow-lg shadow-slate-500"
          span={2}
        >
          <div className="bg-white h-full bg-opacity-30 rounded-2xl">
            <div className="font font-Mitr text-white text-center text-xl pt-7">
              17:54
            </div>
            <img className="h-10 ml-9 mt-2" src={Sunset} />
            <p className="font font-Mitr  text-white text-center text-xl mt-1">
              อาทิตย์ตก
            </p>
          </div>
        </Col>
        <Col
          className="lg:ml-5 md:ml-5 bg-[#eeeeee] rounded-2xl shadow-lg shadow-slate-400"
          span={2}
        >
          <div className="font font-Mitr text-center text-xl mt-7">18:00</div>
          <img className="h-12 ml-9 mt-1" src={night} />
          <div className="font font-Mitr text-center text-xl mt-1">29°</div>
        </Col>
        <Col
          className="lg:ml-5 md:ml-5 h-40 bg-[#3366FF] rounded-2xl shadow-lg shadow-slate-500"
          span={2}
        >
          <div className=" bg-white h-full bg-opacity-30 rounded-2xl">
            <div className="font font-Mitr text-white text-center text-xl pt-7">
              19:00
            </div>
            <img className="h-11 ml-8 mt-1" src={moonnight} />
            <div className="font font-Mitr  text-white text-center text-xl mt-1">
              27°
            </div>
          </div>
        </Col>
        <Col
          className="lg:ml-5 md:ml-5 bg-[#eeeeee] rounded-2xl shadow-lg shadow-slate-400"
          span={2}
        >
          <div className="font font-Mitr text-center text-xl mt-7">20:00</div>
          <img className="h-12 ml-8" src={moon} />
          <p className="font font-Mitr text-center text-xl mt-1">25°</p>
        </Col>
      </Row>
      <MenuPage />
    </div>
  );
}

export default Detail;
