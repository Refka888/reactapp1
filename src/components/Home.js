

import React, { useEffect, useState } from "react";
import axios from 'axios';

import img5 from '../assets/assets_Homework_Front-End_01/path-copy-7.png';
import img6 from '../assets/assets_Homework_Front-End_01/green-light-copy-2.png';
import img7 from '../assets/assets_Homework_Front-End_01/path-copy-2.png';
import img8 from '../assets/assets_Homework_Front-End_01/path-copy-7.png';




export default function Home(){

    const [state, setState] = useState({ joke1:'  ', joke2:' ',joke3:' ',joke4:' ',joke5:' ',joke6:' '})

    useEffect( () => {
      fetchData();
     
    },[]);
    
    const fetchData = async (e) =>{
     
      const result1 = await axios.get('https://api.chucknorris.io/jokes/search?query=lower');
      const result2 = await axios.get('https://api.chucknorris.io/jokes/search?query=doctor');
      const result3 = await axios.get('https://api.chucknorris.io/jokes/search?query=business');
      const result4 = await axios.get('https://api.chucknorris.io/jokes/search?query=police');
      const result5 = await axios.get('https://api.chucknorris.io/jokes/search?query=boss');
      setState({
        ...state,
        joke1:result1.data.result[0].value,
        joke2:result2.data.result[0].value,
        joke3:result3.data.result[0].value,
        joke4:result4.data.result[0].value,
        joke6:result5.data.result[0].value,
 
 
      });
    };
    
      return<div>
              
          <section className="container">
            <section>
            <div className="jokes">
                <div ><a href="#" className="J1">ADULT JOKES</a></div>
                <div ><a href="#"className="J2">DAD JOKES</a></div>
                <div ><a href="#" className="J4">JOB JOKES</a></div>
                <div ><a href="#" className="J5">BIRTHDAY JOKES</a></div>
                <div ><a href="#" className="J6">SOCIAL JOKES</a></div>
                <div ><a href="#" className="J7">PUNS</a></div>
                <div ><a href="#" className="J8">VIEW ALL<img className="img5" src={img5} alt=""/></a></div>
            </div>
        </section>
        <div>
        <hr className="hr-separation"/>
        <p className="p-separation">SOCIAL JOKES</p>
        </div>
        <section>
            <div className="section3">
                    <article className="section3div">
                        <div ><h3><img src={img6} alt=""/>LOWER JOKE</h3></div>
                        <div><p>{state.joke1}</p></div>
                        <div><p className="stats">SEE STATS<img src={img7} alt=""/></p></div>
                    </article>
                    <article className="section3div">
                        <div><h3><img src={img6} alt=""/>DOCTOR JOKE</h3></div>
                        <div><p>{state.joke2}</p></div>
                        <div><p className="stats">SEE STATS<img src={img7} alt=""/></p></div>
                    </article>
                    <article className="section3div">
                        <div><h3><img src={img6} alt=""/>BUSINESS JOKE</h3></div>
                        <div><p>{state.joke3}</p></div>
                        <div><p className="stats">SEE STATS<img src={img7} alt=""/></p></div>
                    </article>
                    <article className="section3div">
                        <div><h3><img src={img6} alt=""/>POLICE JOKE</h3></div>
                        <div><p>{state.joke4}</p></div>
                        <div><p className="stats">SEE STATS<img src={img7} alt=""/></p></div>
                    </article>
                    <article className="section3div">
                        <div><h3><img src={img6} alt=""/>DOCTOR JOKE</h3></div>
                        <div><p>{state.joke2}</p></div>
                        <div><p className="stats">SEE STATS<img src={img7} alt="" /></p></div>
                    </article>
                    <article className="section3div">
                        <div><h3><img src={img6} alt=""/>BOSS JOKE</h3></div>
                        <div><p>{state.joke5}</p></div>
                        <div><p className="stats">SEE STATS<img src={img7} alt="fleche"/></p></div>
                    </article>
                
            </div>
        </section>
        <article>
            <p className="view">VIEW MORE <img src={img8} alt="fleche"/></p>
        </article>
        </section>
    </div>;
    }


