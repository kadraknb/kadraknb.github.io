const mudarUrl = (idProjeto) => {
  const seg = Date.now()
  console.log(seg)
  const state = { page_id: seg, user_id: seg }

  const origin = global.location.origin
  const Url = idProjeto ? `${origin}/${idProjeto}` : origin
  window.history.pushState(state, 'asd', Url)
}
export default mudarUrl
