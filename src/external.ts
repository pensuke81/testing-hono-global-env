export let __EXTERNAL_SECRET_KEY__: string

export const setExternalSecretKey = (key: string) => {
  __EXTERNAL_SECRET_KEY__ = key
}

export const external = () => {
  return 'hello' + __EXTERNAL_SECRET_KEY__
}
