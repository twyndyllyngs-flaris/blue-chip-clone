const getCasinoTime = () => {
  const now = new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC'
  }

  return (
    now.toLocaleString('en-GB', options).replace(',', '').replace(' ', ' - ') +
    ' (UTC)'
  )
}

export {getCasinoTime};
