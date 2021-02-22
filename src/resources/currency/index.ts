export function formatBrCurrency(value: number) {
  return Intl.NumberFormat(
    'pt-BR',
    { currency: 'BRL', style: 'currency' }
  ).format(value)
}
