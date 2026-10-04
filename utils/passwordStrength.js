function checkPasswordStrength(password) {
  const checks = {
    length: password.length >= 8, lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password), number: /[0-9]/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password), longEnough: password.length >= 12,
  };
  const passed = Object.values(checks).filter(Boolean).length;
  let score = 0;
  if (password.length >= 8 && passed >= 2) score = 1;
  if (password.length >= 8 && passed >= 3) score = 2;
  if (password.length >= 10 && passed >= 4) score = 3;
  if (password.length >= 12 && passed >= 5) score = 4;
  const labels = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];
  return { score, label: labels[score], checks, passed };
}
module.exports = { checkPasswordStrength };
