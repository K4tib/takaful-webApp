import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Categories from "./Pages/Categories";
import DonationForm from "./Pages/DonationForm";
import Home from "./Home";
import { MdMasks } from "react-icons/md";
import {
  FaHandHoldingUsd,
  FaChild,
  FaQuestion,
  FaGraduationCap,
} from "react-icons/fa";
import { RiEarthquakeFill } from "react-icons/ri";
import { TbVirusSearch } from "react-icons/tb";

import c1 from "./images/c1.png";
import c2 from "./images/c2.png";
import c3 from "./images/c3.png";
import c4 from "./images/c4.png";
import c5 from "./images/c5.png";
import c6 from "./images/c6.png";
import c7 from "./images/c7.png";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navbar */}
        <Navbar />
        <Routes>
          <Route path="/donation-form" element={<DonationForm UserPfp="" />} />
          <Route
            path="/c1"
            element={
              <Categories
                headerTitle="Disease Research and Treatment"
                iconlink={<MdMasks />}
                CanotParagraphe="Your donations drive groundbreaking research and innovative treatments, fighting diseases... From funding advances in cancer, infectious disease treatments and any other type of disease, your support makes a tangible difference. "
                bimageUrl={c1}
              />
            }
          />
          <Route
            path="/c2"
            element={
              <Categories
                headerTitle="Providing Aid to the Impoverished"
                iconlink={<FaHandHoldingUsd />}
                CanotParagraphe="Your donation can make a world of difference to those struggling with poverty. By offering a helping hand, you're not just alleviating immediate suffering but also empowering communities to break the cycle of poverty and build a brighter future.."
                bimageUrl={c2}
              />
            }
          />
          <Route
            path="/c3"
            element={
              <Categories
                headerTitle="Supporting Victims of Natural Disasters "
                iconlink={<RiEarthquakeFill />}
                CanotParagraphe="When disaster strikes, your generosity can be a lifeline for those affected. Your donation provides emergency relief supplies, medical assistance, and support for rebuilding efforts. By standing in solidarity with disaster survivors, you're offering hope and helping communities recover and rebuild stronger than before... "
                bimageUrl={c3}
              />
            }
          />
          <Route
            path="/c4"
            element={
              <Categories
                headerTitle="Funding Scientific Research "
                iconlink={<TbVirusSearch />}
                CanotParagraphe="Your support for scientific research fuels innovation and discovery across a wide range of fields, your donation drives progress and expands our collective knowledge. Together, we can unlock new possibilities and shape a better world for future generations..."
                bimageUrl={c4}
              />
            }
          />
          <Route
            path="/c5"
            element={
              <Categories
                headerTitle="Providing Education for Underprivileged Groups "
                iconlink={<FaGraduationCap />}
                CanotParagraphe="Education is a powerful tool for breaking the cycle of poverty and building a brighter future.  By investing in education, you're empowering individuals to reach their full potential, opening doors to new opportunities, and creating pathways out of poverty."
                bimageUrl={c5}
              />
            }
          />
          <Route
            path="/c6"
            element={
              <Categories
                headerTitle="Supporting Social Programs for Disadvantaged Children: "
                iconlink={<FaChild />}
                CanotParagraphe="Every child deserves a chance to thrive and reach their full potential. Your donation supports social programs that provide disadvantaged children with essential resources, mentorship, and opportunities for growth.."
                bimageUrl={c6}
              />
            }
          />
          <Route
            path="/c7"
            element={
              <Categories
                headerTitle="Other Causes "
                iconlink={<FaQuestion />}
                CanotParagraphe="Your donation can support a wide range of causes Whether it's funding a special event like a wedding or birthday celebration, or any other meaningful endeavor..  Every contribution, no matter how small, has the power to create positive change and make dreams a reality. "
                bimageUrl={c7}
              />
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Footer  */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
