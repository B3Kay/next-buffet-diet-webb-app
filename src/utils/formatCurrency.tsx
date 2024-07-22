export type Currency = 'pounds' | 'dollars' | 'sek' | 'kronor';

export function formatCurrency(amount: number, currency: Currency): string {
    switch (currency) {
        case 'pounds':
            return `£${amount}`;
        case 'dollars':
            return `$${amount}`;
        case 'kronor':
            return `${amount} SEK`;
        default:
            return `${amount} ${currency}`;
    }
}

