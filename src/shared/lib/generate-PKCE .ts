export const generatePKCE = async () => {
  const encoder = new TextEncoder();
  const array = new Uint8Array(32);

  window.crypto.getRandomValues(array);
  const code_verifier = btoa(String.fromCharCode(...array))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const hashBuffer = await window.crypto.subtle.digest('SHA-256', encoder.encode(code_verifier));
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const code_challenge = btoa(String.fromCharCode(...hashArray))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return { code_verifier, code_challenge };
};
