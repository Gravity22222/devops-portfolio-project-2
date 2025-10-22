module.exports = {
  secret: process.env.APP_SECRET || 'algum_valor_padrao',
  expiresIn: '7d' // <-- CORRIGIDO para 7 dias
};