import React from 'react';

// material-ui
import { Grid, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

// project imports
import CustomDateTime from 'components/forms/components/DateTime/CustomDateTime';
import MainCard from 'components/ui-component/cards/MainCard';
import SubCard from 'components/ui-component/cards/SubCard';
import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| DATETIME ||============================== //

const DateTime = () => {
  const [valueBasic, setValueBasic] = React.useState(new Date());

  return (
    <MainCard title="Date & Time" secondary={<SecondaryAction link="https://next.material-ui.com/components/date-time-picker/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <SubCard title="Basic Datetime Picker">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField fullWidth {...props} helperText="" />}
                label="Date & Time"
                value={valueBasic}
                onChange={(newValue) => {
                  setValueBasic(newValue);
                }}
              />
            </LocalizationProvider>
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Disabled">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField fullWidth {...props} helperText="" />}
                label="Date & Time"
                value={valueBasic}
                onChange={(newValue) => {
                  setValueBasic(newValue);
                }}
                disabled
              />
            </LocalizationProvider>
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Mobile Mode">
            <CustomDateTime />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};
DateTime.Layout = 'authGuard';

export default DateTime;