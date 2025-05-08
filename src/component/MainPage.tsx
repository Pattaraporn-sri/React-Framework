// import "./App.css";
import { Col, Row, Input, Space, Flex, Progress } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import darksun from "./img/icons8-night-64.png";
import bell from "./img/icons8-notification-24.png";
import user from "./img/icons8-female-profile-80.png";
import lightning from "./img/thunder.png";
import rain from "./img/rain.png";
import cloundrain from "./img/cloud-rain.png";
import moonnight from "./img/moon-night.png";
import cloudy from "./img/cloudy.png";
import cloundlightning from "./img/cloud-lightning.png";
import windy from "./img/windy.png";
import location from "./img/icons8-location-24.png";
import SUN from "./img/icons8-sun-64.png";
import sunset from "./img/icons8-sunset-47.png";
import Sun from "./img/icons8-sun-48 (1).png";
import Moon from "./img/icons8-moon-50.png";
import umbrella from "./img/icons8-umbrella-48.png";
import Cloud from "./img/icons8-cloud-64.png";
import SuN from "./img/icons8-sun-48 (2).png";
import Location from "./img/icons8-location-48.png";
import WIND from "./img/icons8-wind-94.png";
import wet from "./img/icons8-dew-point-48.png";
import water from "./img/icons8-water-48.png";
import MenuPage from "./MenuPage";

function MainPage() {
  return (
    <>
      <div className="lg:bg-gray-100 lg:h-screen md:h-screen md:w-full flex lg:overflow-hidden">
        <div className="absolute lg:w-[550px] md:w-[958px] lg:h-[730px] md:h-[2000px] lg:right-0 lg:bg-climate md:bg-climate bg-no-repeat lg:bg-cover md:bg-cover">
          <div className="bg-white lg:bg-opacity-60 md:bg-opacity-50 md:h-[2000px] pb-4">
            <div className="flex lg:pt-6 md:pt-14 lg:ml-4 md:ml-[550px]">
              <Space.Compact
                className="lg:ml-5 lg:w-[300px] md:w-[250px]"
                size="large"
              >
                <Input addonBefore={<SearchOutlined />} placeholder="search" />
              </Space.Compact>
              <img className="h-6 lg:ml-32 md:ml-10 mt-2" src={bell} />
              <img className="h-9 ml-2 mt-1" src={user} />
            </div>
            <div>
              <Col className=" lg:w-[485px] md:w-[600px] text-center lg:h-[300px] md:h-[320px] lg:ml-8 md:ml-44 lg:mt-4 md:mt-28 rounded-2xl border-2">
                <div className="bg-white h-full bg-opacity-30 rounded-2xl shadow-md shadow-neutral-300">
                  <div className="flex ml-8 pt-2">
                    <img className="h-5 mt-1" src={Location} />
                    <p className="ml-1 font font-Mitr font-normal text-stone-800 text-lg">
                      ขอนแก่น
                    </p>
                  </div>
                  <img
                    className="h-20 w-24 lg:ml-48 md:ml-60 -mt-3"
                    src={Cloud}
                  />
                  <p className="font font-Mitr font-normal text-stone-800 text-lg mt-2">
                    Today, 14 April
                  </p>
                  <p className="font font-Mitr font-bold text-5xl mt-2">29°</p>
                  <p className="font font-Mitr font-normal mt-2 text-stone-800">
                    Sunny
                  </p>
                  <div className="flex justify-center mt-2">
                    <img className="h-8 -mt-2" src={WIND} />
                    <p className="font font-Mitr font-normal text-stone-800 ml-2">
                      wind
                    </p>
                    <p className="font font-Mitr font-normal text-stone-800 ml-2">
                      |
                    </p>
                    <p className="font font-Mitr font-normal text-stone-800 ml-2">
                      19 km/h
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img className="h-7 -ml-6" src={wet} />
                    <p className="font font-Mitr font-normal text-stone-800 ml-2">
                      Hum
                    </p>
                    <p className="font font-Mitr font-normal text-stone-800 ml-2">
                      |
                    </p>
                    <p className="font font-Mitr font-normal text-stone-800 ml-2">
                      22%
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="lg:h-[140px] md:h-[150px] lg:w-[485px] md:w-[485px] text-center lg:ml-8 md:ml-56 lg:mt-3 md:mt-40 rounded-2xl shadow-md shadow-neutral-300 border-2">
                <div className="bg-white h-full bg-opacity-30 rounded-2xl">
                  <div className="flex pt-5 pl-6 text-slate-700">
                    <img className="h-7" src={windy} />
                    <p className="font font-Mitr ml-3 text-xl">wind</p>
                    <p className="font font-Mitr ml-4 text-xl">|</p>
                    <p className="font font-Mitr ml-4 text-xl">15 km/h</p>
                    <img className="h-7 ml-32" src={location} />
                    <p className="font font-Mitr text-xl ml-1">ราชบุรี</p>
                  </div>
                  <div className="flex pt-7 pl-6 text-slate-700">
                    <img className="h-7" src={water} />
                    <p className="font font-Mitr text-xl ml-3"> Hum </p>
                    <p className="font font-Mitr text-xl ml-4"> | </p>
                    <p className="font font-Mitr text-xl ml-4"> 28% </p>
                  </div>
                  <p className="absolute text-7xl font font-Mitr text-slate-600 right-0 mr-8 -mt-14">
                    26°
                  </p>
                </div>
              </Col>
              <Col className="h-[140px] w-[485px] text-center lg:ml-8 md:ml-56 mt-3 rounded-2xl shadow-md shadow-neutral-300 border-2">
                <div className="bg-white h-full bg-opacity-30 rounded-2xl">
                  <div className="flex pt-5 pl-6 text-slate-700">
                    <img className="h-7" src={windy} />
                    <p className="font font-Mitr ml-3 text-xl">wind</p>
                    <p className="font font-Mitr ml-4 text-xl">|</p>
                    <p className="font font-Mitr ml-4 text-xl">18 km/h</p>
                    <img className="h-7 ml-32" src={location} />
                    <p className="font font-Mitr text-xl ml-1">ชุมแพ</p>
                  </div>
                  <div className="flex pt-7 pl-6 text-slate-700">
                    <img className="h-7" src={water} />
                    <p className="font font-Mitr text-xl ml-3"> Hum </p>
                    <p className="font font-Mitr text-xl ml-4"> | </p>
                    <p className="font font-Mitr text-xl ml-4"> 25% </p>
                  </div>
                  <p className="absolute text-7xl font font-Mitr text-slate-600 right-0 mr-8 -mt-14">
                    31°
                  </p>
                </div>
              </Col>
            </div>
          </div>
        </div>
        <div>
          <div className="flex md:relative">
            <div className="font font-Fira text-[#3366FF] lg:text-5xl md:text-4xl font-bold lg:mt-6 md:mt-14 lg:ml-6 md:ml-10">
              07:58 AM
            </div>
            <img
              className="absolute lg:ml-56 md:ml-48 lg:mt-5 md:mt-10 lg:h-20 md:h-14"
              src={darksun}
            />
          </div>
          <div className="md:relative font font-Fira lg:mt-2 md:mt-3 lg:ml-7 md:ml-10 text-gray-900">
            Wednesday, 17 Dec, 2024
          </div>
          <div className="md:relative font font-Fira mt-2 ml-7 flex">
            <img className="h-7" src={SuN} />
            <p className="font font-Fira ml-1 text-[#3366FF] text-2xl">
              Good morning, SunShine!!
            </p>
          </div>

          <Row>
            <div className="flex lg:mt-3 md:mt-96 lg:ml-16 md:ml-32">
              <Col className="lg:ml-6 md:ml-10" span={4}>
                <div className="shadow-lg shadow-zinc-400 lg:h-36 md:h-28 lg:w-28  md:w-20 md:ml-4 bg-white text-center rounded-xl pt-1">
                  <img
                    className="lg:ml-6 md:ml-4 lg:mt-3 md:mt-2 lg:h-16 md:h-10"
                    src={lightning}
                  />
                  <div className="mt-3 font-bold font font-Varela text-slate-700">
                    <p>Sun</p>
                    <div>28°</div>
                  </div>
                </div>
              </Col>
              <Col span={4}>
                <div className="shadow-lg shadow-slate-400 lg:h-36 md:h-28 lg:w-28 md:w-20 md:ml-4 bg-white  text-white text-center rounded-xl pt-1">
                  <img
                    className="lg:ml-7 md:ml-5 lg:mt-3 md:mt-2 lg:h-16 md:h-10"
                    src={rain}
                  />
                  <div className="mt-3 font-bold font font-Varela text-slate-700">
                    <p>Mon</p>
                    <p>17°</p>
                  </div>
                </div>
              </Col>
              <Col span={4}>
                <div className=" shadow-lg shadow-slate-400 lg:h-36 md:h-28 lg:w-28 md:w-20 md:ml-4 bg-white  text-white text-center rounded-xl pt-1">
                  <img
                    className="lg:ml-6 md:ml-5 mt-4 lg:mt-3 md:mt-2 lg:h-16 md:h-10"
                    src={cloundrain}
                  />
                  <div className="mt-3 font-bold font font-Varela text-slate-700">
                    <p>Tue</p>
                    <p>20°</p>
                  </div>
                </div>
              </Col>
              <Col className="" span={4}>
                <div className=" shadow-lg shadow-slate-400 lg:h-36 md:h-28 lg:w-28 md:w-20 md:ml-4 bg-white  text-white text-center rounded-xl pt-1">
                  <img
                    className="lg:ml-8 lg:mt-3 lg:h-16 md:h-11 md:ml-5 md:mt-2"
                    src={cloundlightning}
                  />
                  <div className="mt-3 font-bold font font-Varela text-slate-700">
                    <p>Wed</p>
                    <p>22°</p>
                  </div>
                </div>
              </Col>
              <Col className="" span={4}>
                <div className=" shadow-lg shadow-slate-400 lg:h-36 md:h-28 lg:w-28 md:w-20  md:ml-4 bg-white  text-white text-center rounded-xl pt-1">
                  <img
                    className="lg:ml-9 md:ml-5 lg:mt-5 md:mt-2 lg:h-14 md:h-11 "
                    src={cloudy}
                  />
                  <div className="mt-3 font-bold font font-Varela text-slate-700">
                    <p>Thu</p>
                    <p>19°</p>
                  </div>
                </div>
              </Col>
              <Col className="">
                <div className=" shadow-lg shadow-slate-400 lg:h-36 md:h-28 lg:w-28 md:w-20 md:ml-5 bg-white  text-white text-center rounded-xl pt-1">
                  <img
                    className="lg:ml-6 md:ml-5  mt-5 lg:h-14 md:h-11 lg:mt-4 md:mt-3"
                    src={moonnight}
                  />
                  <div className="mt-3 font-bold font font-Varela text-slate-700">
                    <p>Fri</p>
                    <p>25°</p>
                  </div>
                </div>
              </Col>
            </div>

            <Col className="absolute lg:mt-1 md:mt-[700px] md:-ml-3">
              <div className="h-[190px] w-[450px] ml-8 rounded-xl mt-44  bg-air shadow-lg shadow-gray-400">
                <div className="bg-slate-200 bg-opacity-60 h-full pl-4 rounded-xl">
                  <p className="text-right text-xl font-bold font font-Varela text-gray-700 mr-4 pt-2 ">
                    Air Quality Index
                  </p>
                  <div className="flex">
                    <img className="h-20 -mt-3" src={windy} />
                    <div>
                      <p className="text-[#20C997] text-2xl font font-Varela font-bold ml-1">
                        Good
                      </p>
                      <p className="font font-Varela text-gray-700 ml-2">
                        a perfect dat for a walk
                      </p>
                    </div>
                  </div>
                  <Row className="text-center" gutter={10}>
                    <Col className="gutter-row" span={4}>
                      <div className="bg-gray-300 bg-opacity-40 rounded-xl h-20 w-14 pt-5 shadow-sm shadow-gray-800">
                        <div className="font font-Varela text-[#006666]">
                          <p>9.2</p>
                          <p>PM2</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                      <div className="bg-gray-300 bg-opacity-40 rounded-xl pt-5 h-20 w-14 shadow-sm shadow-gray-800">
                        <div className="font font-Varela text-[#006666]">
                          <p>12.2</p>
                          <p>PM10</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                      <div className="bg-gray-300 bg-opacity-40 rounded-xl pt-5 h-20 w-14 shadow-sm shadow-gray-800">
                        <div className="font font-Varela text-[#006666]">
                          <p>4.8</p>
                          <p>SO2</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                      <div className="bg-gray-300 bg-opacity-40 rounded-xl pt-5 h-20 w-14 shadow-sm shadow-gray-800">
                        <div className="font font-Varela text-[#006666]">
                          <p>4.6</p>
                          <p>PM</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                      <div className="bg-gray-300 bg-opacity-40 rounded-xl pt-5 h-20 w-14 shadow-sm shadow-gray-800">
                        <div className="font font-Varela text-[#006666]">
                          <p>6.5</p>
                          <p>CO</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                      <div className="bg-gray-300 bg-opacity-40 rounded-xl pt-5 h-20 w-14 shadow-sm shadow-gray-800">
                        <div className="font font-Varela text-[#006666]">
                          <p>0.9</p>
                          <p>CO2</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col className="absolute lg:mt-1 md:mt-[920px] lg:-ml-3 md:-ml-60">
              <div className="h-[395px] w-[460px] ml-[500px] mt-44 rounded-xl  bg-sunset shadow-lg shadow-gray-400">
                <div className="bg-white bg-opacity-35 rounded-xl h-full">
                  <p className="ml-5 pt-3 font font-Varela font-bold text-xl text-slate-800">
                    Sunrise & Sunset
                  </p>
                  <div className=" bg-opacity-70 h-24 w-[400px] ml-8 mt-1 rounded-xl shadow-xl">
                    <div className="flex ml-3 pt-2">
                      <img className="h-5" src={location} />
                      <p className="font font-Mitr text-neutral-800 ml-1">
                        กรุงเทพฯ
                      </p>
                      <img className="h-14 mt-6 -ml-16" src={SUN} />
                      <div className="flex mt-5">
                        <div>
                          <p className="font font-Varela text-stone-700 text-sm mt-2 ml-2">
                            Sunrise
                          </p>
                          <p className="font font-Varela text-zinc-700 text-xl">
                            4:40 AM
                          </p>
                        </div>
                        <img className="ml-10 h-14" src={sunset} />
                        <div>
                          <p className="font font-Varela text-stone-700 text-sm mt-2 ml-3">
                            Sunset
                          </p>
                          <p className="font font-Varela text-zinc-700 text-xl ml-2">
                            6:53PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-opacity-70 h-24 w-[400px] ml-8 mt-2 rounded-xl shadow-xl">
                    <div className="flex ml-3 pt-2">
                      <img className="h-5" src={location} />
                      <p className="font font-Mitr text-neutral-800 ml-1">
                        ขอนแก่น
                      </p>
                      <img className="h-14 mt-6 -ml-16" src={SUN} />
                      <div className="flex mt-5">
                        <div>
                          <p className="font font-Varela text-stone-700 text-sm mt-2 ml-2">
                            Sunrise
                          </p>
                          <p className="font font-Varela text-zinc-700 text-xl">
                            4:47 AM
                          </p>
                        </div>
                        <img className="ml-10 h-14" src={sunset} />
                        <div>
                          <p className="font font-Varela text-stone-700 text-sm mt-2 ml-3">
                            Sunset
                          </p>
                          <p className="font font-Varela text-zinc-700 text-xl ml-2">
                            6:45PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-opacity-70 h-32 w-[400px] ml-8 mt-2 rounded-xl shadow-xl">
                    <p className="font font-Mitr ml-1">
                      <div className="flex pt-5 pl-5">
                        <img className="h-5" src={location} />
                        <p className="text-sky-900 ml-1">เชียงใหม่</p>
                        <img className="h-5 ml-10" src={Sun} />
                        <p className="ml-2 text-stone-700">9:00 AM</p>
                        <img className="h-7 ml-10 -mt-1" src={Moon} />
                        <p className="ml-2 text-stone-700">7:00 PM</p>
                      </div>
                      <div className="flex pl-5 pt-3">
                        <img className="h-5" src={location} />
                        <p className="text-sky-900 ml-1">อุดรธานี</p>
                        <img className="h-5 ml-11" src={Sun} />
                        <p className="ml-2 text-stone-700">9:00 AM</p>
                        <img className="h-7 -mt-1 ml-10" src={Moon} />
                        <p className="ml-2 text-stone-700">7:00 PM</p>
                      </div>
                      <div className="flex pl-5 pt-3">
                        <img className="h-5" src={location} />
                        <p className="text-sky-900 ml-1">หนองคาย</p>
                        <img className="h-5 ml-8" src={Sun} />
                        <p className="ml-2 text-stone-700">9:00 AM</p>
                        <img className="h-8 -mt-2 ml-10" src={Moon} />
                        <p className="ml-2 text-stone-700">7:00 PM</p>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="absolute lg:mt-1 md:mt-[498px] lg:-ml-3 md:ml-[460px]">
              <div className="h-[190px] w-[450px] bg-rainfall bg-center rounded-xl ml-8 mt-[380px] shadow-lg shadow-gray-400">
                <div className="bg-sky-50 bg-opacity-40 h-full rounded-xl">
                  <div className="flex">
                    <p className="font font-Varela font-bold text-2xl text-stone-800 pl-5 pt-3">
                      Monthly Rainfall
                    </p>
                    <img className="h-6 ml-40 mt-3" src={umbrella} />
                    <p className="font font-Varela font-bold text-stone-800 mt-4 ml-1">
                      Rain
                    </p>
                  </div>
                  <div className="flex">
                    <Flex className="ml-10 mt-4" wrap gap="small">
                      <Progress
                        className="font font-Varela"
                        type="circle"
                        percent={30}
                        size={120}
                      />
                    </Flex>
                    <Flex
                      className="ml-10 mt-5"
                      vertical
                      gap="small"
                      style={{ width: 180 }}
                    >
                      <Progress
                        className="font font-Varela"
                        percent={30}
                        size="small"
                      />
                      <Progress
                        className="font font-Varela"
                        percent={50}
                        size="small"
                      />
                      <Progress
                        className="font font-Varela"
                        percent={70}
                        size="small"
                      />
                      <Progress
                        className="font font-Varela"
                        percent={85}
                        size="small"
                      />
                    </Flex>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <MenuPage />
      </div>
    </>
  );
}

export default MainPage;
