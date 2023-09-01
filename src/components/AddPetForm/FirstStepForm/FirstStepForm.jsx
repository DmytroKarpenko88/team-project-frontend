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
import { Link } from 'react-router-dom';

const FirstStepForm = ({ data, values, setData, nextStep, cancel }) => {
  // console.log("values:", values)
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!data.category) setIsDisabled(true);
    else setIsDisabled(false);
  }, [data.category]);

  // console.log(isDisabled);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(' value :', value);
    console.log('name:', name);
    // console.log(" value :",  value )
    // console.log("name:", name)

    setData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <FirstStepFormList>
        {/* ----------- first step content radio btn ------------- */}
        <FirstStepFormItemLabel active={data.category === 'pet'}>
          <FirstStepFormItemInput
            autoFocus="on"
            type="radio"
            value="pet"
            checked={data.category === 'pet'}
            name="category"
            onChange={handleChange}
            // id="my-pet"
            // name="category"
          />
          your pet
        </FirstStepFormItemLabel>
        <FirstStepFormItemLabel active={data.category === 'sell'}>
          <FirstStepFormItemInput
            type="radio"
            value="sell"
            checked={data.category === 'sell'}
            // name="sell"
            onChange={handleChange}
            // id="sell"
            name="category"
          />
          sell
        </FirstStepFormItemLabel>
        <FirstStepFormItemLabel active={data.category === 'lost-found'}>
          <FirstStepFormItemInput
            type="radio"
            value="lost-found"
            checked={data.category === 'lost-found'}
            // name="lostFound"
            onChange={handleChange}
            // id="lost-found"
            name="category"
          />
          lost/found
        </FirstStepFormItemLabel>
        <FirstStepFormItemLabel active={data.category === 'in-good-hands'}>
          <FirstStepFormItemInput
            type="radio"
            value="in-good-hands"
            checked={data.category === 'in-good-hands'}
            // name="hands"
            onChange={handleChange}
            // id="for-free"
            name="category"
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
          <Link to={cancel}>
            <AddPetBtnCancel type="button">
              <AddPetBtnCancelDiv>
                <ArrowLeft width="24" height="24" />
                Cancel
                {/* {step === 1 ? 'Cancel' : 'Back'} */}
              </AddPetBtnCancelDiv>
              {/* </Link> */}
            </AddPetBtnCancel>
          </Link>
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
