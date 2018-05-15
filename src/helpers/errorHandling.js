export const errorReporting = (error) => {
  if (error.status === 401) {
    // return getNewToken();
    console.log('expired token'); // TODO: criar uma nova action de aquisição de token, criar states no redux para controlar isso.
  }
  return Promise.reject(error);
};

export const checkStatus = response =>
  (response.ok
    ? response
    : errorReporting(response));
