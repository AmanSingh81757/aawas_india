import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import toolStore from '../stores/toolStore';

type sliderProps = {
    min: number,
    max: number,
    step: number,
    defaultValueType: string,
    label: string,
    onChangeFunction: (event: Event, value: number | number[]) => void,
    onInputChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type toolState = {
    loanAmount: number,
    rateOfInterest: number,
    loanTenure: number,
    emi: number,
    getEmi: () => void,
    changeLoanAmount: (amount: number) => void,
    changeRateOfInterest: (rate: number) => void,
    changeLoanTenure: (tenure: number) => void,
    [key: string]: any
}

export default function Sliders({min, max, step, defaultValueType, label, onChangeFunction, onInputChangeFunction}: sliderProps) {
    const store:toolState = toolStore();
    return (
        <Box sx={{ width: 500 }} className = "flex flex-col">
            <div className='flex justify-between items-center'>
                {label}:
                <input inputMode='numeric' value={store[defaultValueType]} className='border p-1' onChange={onInputChangeFunction}/>
            </div>
            <Slider
                aria-label={label}
                value={store[defaultValueType]}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={step}
                min={min}
                max={max}
                onChange={
                    onChangeFunction
                }
            />
        </Box>
    );
}
