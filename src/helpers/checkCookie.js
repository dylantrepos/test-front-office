/**
 * Check if a cookie exists for the user
 */
 export const testCookie = fetch('https://test-back-office-api.herokuapp.com/users/login', {
  headers: {
      'Content-Type': 'application/json'
  },
  credentials: 'include'
  })
      .then(res => res.json())
      .then(res => (res))