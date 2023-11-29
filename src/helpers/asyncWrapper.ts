async function asyncWrapper(promise: any) {
  try {
    const response = await promise;
    return [response, null];
  } catch (error) {
    return [null, error];
  }
}

export default asyncWrapper;
