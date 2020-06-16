import React from 'react';
import DressCarousel from '../DressCarousel/DressCarousel2';
// import UploadForm from '../uploadForm/UploadForm'
import { useSelector } from 'react-redux';
import ModalLook from '../ModaImg/ModalLook';
import './Dresser.css';

export default function Dresser() {
  const user = useSelector((state) => state.user);
  const { head=[], body=[], legs=[], feet=[] } = user;


  return (
    <div id='globalDiv'>
      <div className='dresser'>
        {/* <UploadForm /> */}

        <div>
          <DressCarousel
            dressArray={head}
            title={'head'}
            type={['Panamka', 'Slyapa', 'Bandana']}
            property='head'
          />
        </div>
        <div>
          <DressCarousel
            dressArray={body}
            title={'body'}
            type={['Panamka', 'Slyapa', 'Bandana']}
            property='body'
          />
        </div>
        <div>
          <DressCarousel
            dressArray={legs}
            title={'legs'}
            type={['Panamka', 'Slyapa', 'Bandana']}
            property='legs'
          />
        </div>
        <div>
          <DressCarousel
            dressArray={feet}
            title={'feet'}
            type={['Panamka', 'Slyapa', 'Bandana']}
            property='feet'
          />
        </div>
        <div>
          <ModalLook />
        </div>
      </div>
    </div>
  );
}
