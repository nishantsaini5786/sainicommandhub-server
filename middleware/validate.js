const { body, validationResult } = require('express-validator');
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ success: false, message: errors.array()[0].msg });
  next();
};
const registerValidation = [
  body('fullName').trim().isLength({ min: 3, max: 60 }).withMessage('Name 3-60 chars'),
  body('username').trim().toLowerCase().isLength({ min: 3, max: 30 }).withMessage('Username 3-30 chars').matches(/^[a-z0-9_]+$/).withMessage('Username: letters/numbers/_ only'),
  body('email').trim().toLowerCase().isEmail().withMessage('Valid email required').normalizeEmail(),
  body('password').isLength({ min: 8 }).withMessage('Password 8+ chars').matches(/[a-z]/).withMessage('Add lowercase').matches(/[A-Z]/).withMessage('Add uppercase').matches(/[0-9]/).withMessage('Add number').matches(/[^A-Za-z0-9]/).withMessage('Add symbol'),
  body('confirmPassword').custom((v, { req }) => v === req.body.password).withMessage('Passwords do not match'),
  body('country').trim().notEmpty().withMessage('Country required'),
  body('acceptedTerms').equals('true').withMessage('Accept terms'),
  handleValidationErrors,
];
module.exports = { registerValidation, handleValidationErrors };
