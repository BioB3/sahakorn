async function universalFetcher(params) {
  const response = await fetch(`/api/${params}`);
  const data = await response.json()
  return data
}

function getToday() {
  let today = new Date();
  const offset = today.getTimezoneOffset();
  today = new Date(today.getTime() - (offset*60*1000))
  return today.toISOString().split('T')[0]
}

function getCurrentMonthYear() {
  let today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  return [month, year]
}

export {universalFetcher, getToday, getCurrentMonthYear}