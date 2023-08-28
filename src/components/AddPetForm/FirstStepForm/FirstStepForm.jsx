import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FirstStepFormItemInput,
  FirstStepFormItemLabel,
  FirstStepFormList,
} from './FirstStepForm.styled';
import {
  AddPetBtnCancel,
  AddPetBtnCancelDiv,
  AddPetBtnItem,
  AddPetBtnList,
  AddPetBtnNext,
} from '../AddPetForm.styled';
import { ArrowLeft, Paw } from 'components/icons';

const FirstStepForm = ({ data, setData, nextStep, cancel }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!data.option) setIsDisabled(true);
    else setIsDisabled(false);
  }, [data.option]);

  // console.log(isDisabled);

  const handleChange = e => {
    // const { name, value } = e.target;
    // const value = e.target.value;
    // const name = e.target.name;

    // setData(prevState => ({
    //   ...prevState,
    //   // [name]: value,
    //   option: value,
    // }));
    console.log('data', data);

    const value = e.target.value;
    console.log("value:", value)
    setData(prev => ({ ...prev, option: value }));

    console.log('data', data);
    console.log('data.option', data.option);
    console.log('value:', value);
  };

  // const handleChange = e => {
  //   const value = e.target.value;
  //   setData(prev => ({ ...prev, option: value }));
  // };
  // const { option } = data;
  // console.log(isDisabled);
  return (
    <>
      <FirstStepFormList>
        {/* ----------- first step content radio btn ------------- */}
        <FirstStepFormItemLabel>
          <FirstStepFormItemInput
            autoFocus="on"
            type="radio"
            value="pet"
            checked={data.option === 'pet'}
            // name="pet"
            onChange={handleChange}
            id="my-pet"
            name="option"
          />
          your pet
        </FirstStepFormItemLabel>
        <FirstStepFormItemLabel>
          <FirstStepFormItemInput
            type="radio"
            value="sell"
            checked={data.option === 'sell'}
            // name="sell"
            onChange={handleChange}
            id="sell"
            name="option"
          />
          sell
        </FirstStepFormItemLabel>
        <FirstStepFormItemLabel>
          <FirstStepFormItemInput
            type="radio"
            value="lostFound"
            checked={data.option === 'lostFound'}
            // name="lostFound"
            onChange={handleChange}
            id="lost-found"
            name="option"
          />
          lost/found
        </FirstStepFormItemLabel>
        <FirstStepFormItemLabel>
          <FirstStepFormItemInput
            type="radio"
            value="hands"
            checked={data.option === 'hands'}
            // name="hands"
            onChange={handleChange}
            id="for-free"
            name="option"
          />
          in good hands
        </FirstStepFormItemLabel>
      </FirstStepFormList>

      <AddPetBtnList>
        <AddPetBtnItem>
          <AddPetBtnNext
            type="button"
            // text="Next"
            // icon={<Paw width="24" height="24" fill="#FEF9F9" />}
            onClick={nextStep && (() => nextStep(false))}
            // filled={false}
            disabled={isDisabled}
          >
            Next
            {/* {step === 3 ? 'Done' : 'Next'} */}
            <Paw width="24" height="24" fill="#FEF9F9" />
          </AddPetBtnNext>
        </AddPetBtnItem>

        <AddPetBtnItem>
          {/* повернути на сторінку з якої прийшов з юзера або з find pet*/}
          <AddPetBtnCancel
            type="button"
            // text="Cancel"
            // isLink={true}
            to={cancel}
          >
            {/* <Link to={backPage}> */}
            <AddPetBtnCancelDiv>
              <ArrowLeft width="24" height="24" />
              Cancel
              {/* {step === 1 ? 'Cancel' : 'Back'} */}
            </AddPetBtnCancelDiv>
            {/* </Link> */}
          </AddPetBtnCancel>
        </AddPetBtnItem>
      </AddPetBtnList>
    </>
  );
};

FirstStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default FirstStepForm;
