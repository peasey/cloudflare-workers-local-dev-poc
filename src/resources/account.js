module.exports = async () => {
  const text = `Processing account resource in ${context.environment.variable(
    'ENVIRONMENT',
  )} environment from ${context.environment.variable('SLOT')} slot...`
  const body = JSON.stringify(text)
  const response = new Response(body, {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return Promise.resolve(response)
}
