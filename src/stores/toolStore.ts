import { create } from 'zustand'

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

const getEmi = (loanAmount: number, rateOfInterest: number, loanTenure: number) => {
    const P = loanAmount;
    const R = rateOfInterest / 1200;
    const N = loanTenure * 12;
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N)-1);
    return emi;
}

const toolStore = create<toolState>((set) => ({

    loanAmount: 1000000,
    rateOfInterest: 7.2,
    loanTenure: 10,
    emi: 11714,

    getEmi: () => {
        const emi = getEmi(toolStore.getState().loanAmount, toolStore.getState().rateOfInterest, toolStore.getState().loanTenure);
        set({emi});
    },

    changeLoanAmount: (amount) => {
        amount = Number(amount)
        set({loanAmount: amount});
        const emi = getEmi(toolStore.getState().loanAmount, toolStore.getState().rateOfInterest, toolStore.getState().loanTenure);
        set({emi});
    },
    changeRateOfInterest: (rate) => {
        rate = Number(rate)
        set({rateOfInterest: rate});
        const emi = getEmi(toolStore.getState().loanAmount, toolStore.getState().rateOfInterest, toolStore.getState().loanTenure);
        set({emi});
    },
    changeLoanTenure: (tenure) => {
        tenure = Number(tenure)
        set({loanTenure: tenure});
        const emi = getEmi(toolStore.getState().loanAmount, toolStore.getState().rateOfInterest, toolStore.getState().loanTenure);
        set({emi});
    },

}))

export default toolStore;