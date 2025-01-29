export const handleCurrencyInput = (numStr: string): string => {
    numStr = numStr.replace(/,/g, '');
    const endsWithDecimal = numStr.endsWith('.');
    const num = parseFloat(numStr);

    // If parsing fails or the string ends with a decimal, return the original string with commas inserted only before the decimal
    if (isNaN(num)) {
        return numStr;
    }

    const formattedStr = num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    return endsWithDecimal ? `${formattedStr}.` : formattedStr;
}

export const validatePositiveCurrency = (val: string | undefined): boolean => {
    if (!val) return true;
    val = val.replace(/,/g, '');
    return val === '' || !isNaN(parseFloat(val)) && parseFloat(val) >= 0;
}

export const parseCorrencyToNumber = (val: string): number => {
    return Number(val.replace(/,/g, ''))
}