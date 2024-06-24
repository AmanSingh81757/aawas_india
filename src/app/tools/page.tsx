"use client"

import React from 'react'
import Sliders from '@/components/Sliders'
import BasicPie from '@/components/PieChartComponent'
import toolStore from '@/stores/toolStore'

export default function Tools() {
    const store = toolStore();

    const emi = Math.trunc(store.emi);
    const loanAmount = Math.trunc(store.loanAmount);
    const loanTenure = Math.trunc(store.loanTenure);
    const totalAmount = emi * 12 * loanTenure;
    const totalInterest = totalAmount - loanAmount;
    const data1 = [
        { id: 0, value: Number(store.loanAmount), label: 'Principal Amount' },
        { id: 1, value: Number(totalInterest), label: 'Interest Amount' },
    ]
    return (
        <div className='flex flex-col p-10 gap-10'>
            <h1 className='text-3xl px-5 font-mono font-bold'>Home Loan EMI Calculator</h1>
            <div className='border p-2 font-serif rounded bg-indigo-200'>
                <div className='flex flex-row justify-around gap-40'>
                    <div className='flex flex-col gap-20 p-10'>
                        <div>
                            <Sliders
                                min={100000}
                                max={100000000}
                                step={10000}
                                defaultValueType={'loanAmount'}
                                label='Loan Amount'
                                onChangeFunction={(e, value:number | number[]) => store.changeLoanAmount(value as number)}
                            />
                        </div>
                        <div>
                            <Sliders
                                min={1}
                                max={100}
                                step={0.2}
                                defaultValueType={'rateOfInterest'}
                                label='Rate of interest (p.a)'
                                onChangeFunction={(e, value:number | number[]) => {store.changeRateOfInterest(value as number)}}
                            />
                        </div>
                        <div>
                            <Sliders
                                min={1}
                                max={30}
                                step={1}
                                defaultValueType={'loanTenure'}
                                label='Loan Tenure'
                                onChangeFunction={(e, value:number | number[]) => store.changeLoanTenure(value as number)}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col items-left justify-center gap-5'>
                        <h1>Montly EMI: ₹{emi}</h1>
                        <h1>Principal Amount: ₹{loanAmount}</h1>
                        <h1>Total Interest: ₹{totalInterest}</h1>
                        <h1>Total Amount: ₹{totalAmount}</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <BasicPie data = {data1}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
