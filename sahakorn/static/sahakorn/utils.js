async function universalFetcher(params) {
  const response = await fetch(`/api/${params}`);
  const data = await response.json()
  return data
}

export {universalFetcher}