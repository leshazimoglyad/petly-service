import { Box, Button, FormLabel } from '@mui/material';
import React from 'react';
import {
  AddBtn,
  AddBtnThemeNotice,
  CssTextField,
  CssTextFieldTheme,
} from '../AddPetModal/SecondStep.styled';
import { ReactComponent as Vector } from '../AddPetModal/icon/Vector.svg';
import { ButtonBox, CantBtn, Input } from '../AddPetModal/FirstStep.styled';
import SexRadios from './SexRadios';
import { LabelFormic, LabelFormicAddComment } from '../Modal/Modal.styled';
import { NOTICE_TYPES } from '../AddNoticeModal/AddNoticeModalІSchems';

const AddNoticeModalSecondStep = ({ formik, onBack }) => {
  const isSellNotice = formik.values.noticeType === NOTICE_TYPES.SELL;
  const errorsMessages = Object.values(formik.errors);

  return (
    <div>
      <SexRadios formik={formik} />

      <FormLabel sx={LabelFormic}>
        Location
        <Input
          value={formik.values.location}
          onChange={formik.handleChange}
          type="text"
          name="location"
          placeholder="Location"
        />
      </FormLabel>
      {isSellNotice && (
        <FormLabel sx={LabelFormic}>
          Price
          <Input
            value={formik.values.price}
            onChange={formik.handleChange}
            type="text"
            name="price"
            placeholder="Price"
          />
        </FormLabel>
      )}
      <FormLabel sx={LabelFormic}>
        Load the pet’s image:
        <AddBtn sx={AddBtnThemeNotice} variant="contained" component="label">
          <Vector />
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            name="photo"
            onChange={event => {
              formik.setFieldValue('photo', event.currentTarget.files[0]);
            }}
          />
        </AddBtn>
      </FormLabel>
      <FormLabel sx={LabelFormicAddComment}>
        Comments
        {/* <Input
          value={formik.values.comment}
          onChange={formik.handleChange}
          type="text"
          name="comment"
          placeholder="Type comments"
        /> */}
        <CssTextField
          sx={CssTextFieldTheme}
          id="outlined-multiline-flexible"
          label="Type comments"
          name="comment"
          multiline
          maxRows={4}
          value={formik.values.comment}
          onChange={formik.handleChange}
        />
      </FormLabel>
      {errorsMessages.length !== 0 &&
        errorsMessages.map(message => {
          return <p key={message}>{message}</p>;
        })}

      <Box sx={ButtonBox}>
        <Button sx={CantBtn} onClick={onBack}>
          Back
        </Button>
        <Button sx={CantBtn} type="submit">
          Done
        </Button>
      </Box>
    </div>
  );
};

export default AddNoticeModalSecondStep;
