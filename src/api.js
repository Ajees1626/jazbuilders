const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

/**
 * Submit a form element to Web3Forms using its current fields, including access_key.
 * @param {HTMLFormElement} form
 */
export async function submitWeb3FormFromForm(form) {
  if (!form) {
    throw new Error('Form is missing.')
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    body: new FormData(form),
  })

  const data = await response.json().catch(() => ({}))
  if (!response.ok || data.success === false) {
    throw new Error(data.message || 'Failed to send. Please try again.')
  }

  return data
}
