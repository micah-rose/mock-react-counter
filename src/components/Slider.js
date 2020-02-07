//Component file for a graduated slider that we will use to display how close an associate is to a goal or incentive.
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const dailyMarks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '1',
  },
  {
    value: 20,
    label: '2',
  },
  {
    value: 30,
    label: '3',
  },
  {
    value: 40,
    label: '4',
  },
  {
    value: 50,
    label: '5',
  },
  {
    value: 60,
    label: '6',
  },
  {
    value: 70,
    label: '7',
  },
  {
    value: 80,
    label: '8',
  },
  {
    value: 90,
    label: '9',
  },
  {
    value: 100,
    label: '10',
  },
];

const weeklyMarks = [
    {
        value: 0,
        label: '0',
      },

      {
        value: 20,
        label: '5',
      },

      {
        value: 40,
        label: '10',
      },

      {
        value: 60,
        label: '15',
      },

      {
        value: 80,
        label: '20',
      },

      {
        value: 100,
        label: '25',
      },
    ];

  const monthlyMarks = [
    {
        value: 0,
        label: '0',
      },
      {
        value: 10,
        label: '5',
      },
      {
        value: 20,
        label: '10',
      },
      {
        value: 30,
        label: '15',
      },
      {
        value: 40,
        label: '20',
      },
      {
        value: 50,
        label: '25',
      },
      {
        value: 60,
        label: '30',
      },
      {
        value: 70,
        label: '35',
      },
      {
        value: 80,
        label: '40',
      },
      {
        value: 90,
        label: '45',
      },
      {
        value: 100,
        label: '50',
      },
    ];

  const incentiveMarks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 15,
      label: '$15',
    },
    {
      value: 60,
      label: '$50',
    },
    {
      value: 100,
      label: '$100',
    },
  ];

function valuetext(value) {
  return `${value}`;
}

//fix this function to be specific to each type of scale
function valueLabelFormat(value) {
  return dailyMarks.findIndex(mark => mark.value === value) + 1;
}

function valueLabelFormatTwo(value) {
    return weeklyMarks.findIndex(mark => mark.value === value) + 1;
}

function valueLabelFormatThree(value) {
    return monthlyMarks.findIndex(mark => mark.value === value) + 1;
}

function valueLabelFormatFour(value) {
    return incentiveMarks.findIndex(mark => mark.value === value) + 1;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <div className={classes.margin} />
      <Typography id="discrete-slider-restrict" gutterBottom>
        Today's Goal:
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={dailyMarks}
      />

    <div className={classes.margin} />
      <Typography id="discrete-slider-restrict" gutterBottom>
        Weekly Goal:
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormatTwo}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={weeklyMarks}
      />

    <div className={classes.margin} />
      <Typography id="discrete-slider-restrict" gutterBottom>
        Monthly Goal:
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormatThree}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={monthlyMarks}
      />

    <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Incentive Goal: 
      </Typography>
      <Slider
        defaultValue={70}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={incentiveMarks}
        valueLabelDisplay="on"
      />
    </div>
  );
}