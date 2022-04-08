module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f0b96de658351ee7eae59892ab1d4a24'),
  },
});
