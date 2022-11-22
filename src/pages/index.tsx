import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";
import { useUser } from "~/hooks/useUser";
import { MembershipMetadata } from "~/types";
// import bgWelcome from '../assets/bg-welcome.png';
// import bgProfile from '../assets/bg-profile.png';
// import bgTablet from "../assets/bg-tablet.png"
// import bgDesktop from '../assets/bg-desktop.png'
import logo from '../assets/white-logo.png';
import rightArrow from '../assets/right-arrow.png';
import Akcela from '../assets/akcela.jpeg'
import TechEd from '../assets/teched.jpeg'
import Nordev from '../assets/nordev.jpeg'
import Polygon from '../assets/polygon.jpeg'
import Stc from '../assets/syncthecity2022.jpeg'
import blueTick from '../assets/blue-tick.png';
import { useState } from "react";


  const Home: NextPage = () => {
    const { logoutUser, user } = useUser();
    const { data } =
      useSWR<{ memberships: MembershipMetadata[] }>("/api/memberships");

      const [NFTs, SetNFTs]=useState([
        {
          id:1,
          name:"Sync the City 2022",
          image:Stc.src,
          year:2022,
          issuer:"XXXX",
          type:1
        }  ,
        {
          id:2,
          name:"Tech Educators",
          image:TechEd.src,
          year:2022,
          issuer:"XXXX",
          type:1
        }  ,
        {
          id:3,
          name:"Akcela",
          image:Akcela.src,
          year:2022,
          issuer:"XXXX",
          type:1
        }  ,
        {
          id:4,
          name:"Norfolk Developers",
          image:Nordev.src,
          year:2022,
          issuer:"XXXX",
          type:1
        }  ,
        {
          id:5,
          name:"Polygon",
          image:Polygon.src,
          year:2022,
          issuer:"XXXX",
          type:1
        }  ,
      ])

    if (user?.isLoggedIn) {
      return (
        <div className="landing-page-container">
          <div className="landing-page-top-half">
            <img className="logo" src={logo.src}></img>
            <div className="welcome-text-container">
              <h1 className="welcome-text">Welcome to TrustM3,</h1>
              <p className="welcome-text2">Verification on demand.</p>
            </div>
          </div>
            <Link href="/api/login" className="connect-wallet-btn">Connect Wallet</Link>
        </div>
      );
    }
    return (
      <div className="loggedin-page-container">
        <div className="loggedin-top">
          <div className="logout-container">
            <img className="logo" src={logo.src}></img>
            <div className="log-out-box">
            <img className="logout-icon" src={rightArrow.src}></img>
            <p className="logout-text" onClick={() => logoutUser()}>Logout</p>
            </div>
          </div> 
            <p className="loggedin-title">Welcome to your wallet, User</p>
          <Link href="/CV" className="loggedin-gotocv-container">
              <p className="gotocv-text">Go to CV</p>
              <img className="gotocv-arrow" src={rightArrow.src}></img>
          </Link>
          </div>
      <div className="loggedin-bottom">
        <div className="loggedin-headings">
          <a href="javascript:void(0)" className="text-white active">All</a>
          <a href="javascript:void(0)" className="text-white">Jobs</a>
          <a href="javascript:void(0)" className="text-white">Education</a>
          <a href="javascript:void(0)" className="text-white">Skills</a>
        </div>
          <input className="job-search-input" placeholder="Search..">
          </input>
        <div className="job-description-container" >
          {NFTs.map((nft)=>{
            return(
          <Link href={"/JobDetails?id="+nft.id} key={nft.id}>
            <div className="nft-box mt-4">
              <label className="nft-year pt-2 pb-4">{nft.year}</label>
              <img src={nft.image} className="nft-img"></img>
              <div className="nft-description-box mt-3">
                <img src={blueTick.src} className="nft-tick"></img>
                <label className="nft-description mt-2">{nft.name}</label>
              </div>
            </div>
            </Link>)
        })}
        </div>
      </div>
      </div>
    );
  };

  export default Home;